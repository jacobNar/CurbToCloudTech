export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { date } = req.query;

    if (!date) {
        return res.status(400).json({ message: 'Date parameter required' });
    }

    try {
        const [year, month, day] = date.split('-').map(Number);
        const selectedDate = new Date(year, month - 1, day);
        const dayOfWeek = selectedDate.getDay();

        const allSlots = [
            '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
        ];

        // Temporary availability rules.
        if (dayOfWeek === 4) {
            return res.status(200).json({ slots: [], busyBlocks: [] });
        }

        if (dayOfWeek === 0 || dayOfWeek === 6) {
            return res.status(200).json({ slots: allSlots, busyBlocks: [] });
        }

        return res.status(200).json({ slots: allSlots, busyBlocks: [] });
    } catch (error) {
        console.error('Slot availability error:', error);
        return res.status(200).json({ slots: [], busyBlocks: [] });
    }
}
