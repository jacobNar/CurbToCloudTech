import { google } from 'googleapis';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { date } = req.query;

    if (!date) {
        return res.status(400).json({ message: 'Date parameter required' });
    }

    // Default working hours logic (9 AM to 5 PM)
    const allSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

    try {
        if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
            console.warn("Google Credentials missing. Returning mock available slots.");
            return res.status(200).json({ slots: allSlots, booked: [] });
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
        });

        const calendar = google.calendar({ version: 'v3', auth });

        // Build precise start/end time queries for the specified date
        // Assumes Central Time based on user context, adapt if needed
        const timeMin = new Date(`${date}T00:00:00-05:00`); 
        const timeMax = new Date(`${date}T23:59:59-05:00`);

        const freeBusyResult = await calendar.freebusy.query({
            requestBody: {
                timeMin: timeMin.toISOString(),
                timeMax: timeMax.toISOString(),
                items: [{ id: process.env.GOOGLE_CALENDAR_ID }]
            }
        });

        const booked = [];
        const busyBlocks = freeBusyResult.data.calendars[process.env.GOOGLE_CALENDAR_ID]?.busy || [];
        
        // Very basic mock translating Google's exact times to our 1 hour blocks
        busyBlocks.forEach(block => {
            const d = new Date(block.start);
            // Example: 2026-03-28T14:00:00.000Z -> gets pushed to booked array to disable UI
            booked.push(d.toISOString());
        });

        return res.status(200).json({ slots: allSlots, booked });
    } catch (error) {
        console.error('Google Calendar Error:', error);
        // Fallback to empty booked if API fails so UI doesn't crash
        return res.status(200).json({ slots: allSlots, booked: [] });
    }
}
