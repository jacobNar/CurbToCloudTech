import { google } from 'googleapis';
import * as brevo from '@getbrevo/brevo';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { contact_name, email, phone_number, company_name, project_description, appointment_time, type, service_type, address_line1, address_line2, city, state, zip_code } = req.body;

        const address = `${address_line1 || ''} ${address_line2 || ''} ${city || ''}, ${state || ''} ${zip_code || ''}`.trim();

        if (!email || !appointment_time) {
            return res.status(400).json({ message: 'Email and appointment time are required' });
        }

        let meetLink = null;
        const isDigital = type === 'online';
        
        let eventDetailsForClient = null;

        // 1. Google Calendar Booking
        if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && process.env.GOOGLE_REFRESH_TOKEN) {
            const oauth2Client = new google.auth.OAuth2(
                process.env.GOOGLE_CLIENT_ID,
                process.env.GOOGLE_CLIENT_SECRET
            );
            oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

            const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
            const startTime = new Date(appointment_time);
            const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // 1 hour

            const event = {
                summary: `Meeting with ${contact_name || company_name}`,
                description: `Phone: ${phone_number}\nCompany: ${company_name}\nService Type: ${service_type || 'N/A'}\nDescription: ${project_description}`,
                start: { dateTime: startTime.toISOString() },
                end: { dateTime: endTime.toISOString() },
            };

            if (isDigital) {
                // Requires Google Workspace for Native Conference Data injection
                event.conferenceData = {
                    createRequest: { requestId: `meet_${Date.now()}` }
                };
            } else {
                event.location = address;
            }

            try {
                const calendarResponse = await calendar.events.insert({
                    calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
                    resource: event,
                    conferenceDataVersion: 1
                });
                
                if (isDigital && calendarResponse.data.hangoutLink) {
                   meetLink = calendarResponse.data.hangoutLink;
                }
                eventDetailsForClient = calendarResponse.data;
            } catch (err) {
                console.error("Failed to book Google Calendar event:", err);
                // Proceed anyway so contact gets added to CRM
            }
        }

        // 2. Brevo CRM Contact Creation
        if (process.env.BREVO_API_KEY) {
            const defaultClient = brevo.ApiClient.instance;
            const apiKey = defaultClient.authentications['api-key'];
            apiKey.apiKey = process.env.BREVO_API_KEY;

            const contactsApi = new brevo.ContactsApi();
            const listId = isDigital ? parseInt(process.env.BREVO_LIST_ID_DIGITAL) : parseInt(process.env.BREVO_LIST_ID_IN_PERSON);
            
            const createContact = new brevo.CreateContact();
            createContact.email = email;
            createContact.listIds = [listId];
            createContact.updateEnabled = true;

            const nameParts = (contact_name || '').split(' ');
            createContact.attributes = {
                FIRSTNAME: nameParts[0] || '',
                LASTNAME: nameParts.slice(1).join(' ') || '',
                SMS: phone_number || '',
                COMPANY: company_name || '',
                ADDRESS: address || ''
            };

            try {
                await contactsApi.createContact(createContact);
            } catch (err) {
                console.error("Failed to add Brevo contact:", err);
            }

            // 3. Brevo Transactional Email
            const transacEmailsApi = new brevo.TransactionalEmailsApi();
            const sendSmtpEmail = new brevo.SendSmtpEmail();
            
            sendSmtpEmail.to = [{ email: email, name: contact_name }];
            sendSmtpEmail.templateId = isDigital ? parseInt(process.env.BREVO_TEMPLATE_ID_DIGITAL) : parseInt(process.env.BREVO_TEMPLATE_ID_IN_PERSON);
            
            // Pass the variables into the template dynamically
            sendSmtpEmail.params = {
                MEET_LINK: meetLink || 'Will be sent manually if missing',
                APPOINTMENT_TIME: new Date(appointment_time).toLocaleString(),
                ADDRESS: address || '',
                FIRSTNAME: nameParts[0] || ''
            };

            try {
                await transacEmailsApi.sendTransacEmail(sendSmtpEmail);
            } catch (err) {
                console.error("Failed to send Brevo transactional email:", err);
            }
        }

        return res.status(200).json({ 
            success: true, 
            message: 'Appointment booked successfully!',
            eventDetails: eventDetailsForClient
        });
    } catch (error) {
        console.error('Error booking appointment:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
