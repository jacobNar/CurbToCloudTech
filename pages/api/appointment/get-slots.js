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
        if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.GOOGLE_REFRESH_TOKEN) {
            console.warn("Google Credentials missing. Returning mock available slots.");
            return res.status(200).json({ slots: allSlots, busyBlocks: [] });
        }

        const oauth2Client = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET
        );
        oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

        const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

        // Build precise start/end time queries for the specified date
        // Assumes Central Time based on user context, adapt if needed
        const timeMin = new Date(`${date}T00:00:00-05:00`);
        const timeMax = new Date(`${date}T23:59:59-05:00`);

        const eventsResult = await calendar.events.list({
            calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
            timeMin: timeMin.toISOString(),
            timeMax: timeMax.toISOString(),
            singleEvents: true,
            orderBy: 'startTime'
        });

        const busyBlocks = (eventsResult.data.items || [])
            .filter(event => event.start?.dateTime && event.end?.dateTime)
            .map(event => ({ start: event.start.dateTime, end: event.end.dateTime }));

        return res.status(200).json({ slots: allSlots, busyBlocks });
    } catch (error) {
        console.error('Google Calendar Error:', error);
        // Fallback to empty booked if API fails so UI doesn't crash
        return res.status(200).json({ slots: allSlots, busyBlocks: [] });
    }
}
