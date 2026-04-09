const mysql = require('mysql2/promise');

exports.handler = async (event) => {
    if (event.httpMethod !== 'GET') {
        return { statusCode: 405, body: JSON.stringify({ message: 'Method not allowed' }) };
    }

    const date = event.queryStringParameters.date;

    if (!date) {
        return { statusCode: 400, body: JSON.stringify({ message: 'Date parameter required' }) };
    }

    // Mock available slots for now
    const slots = [
        '09:00', '10:00', '11:30', '13:00', '14:30', '16:00', '17:00'
    ];

    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        const [rows] = await connection.query(
            `SELECT appointment_time FROM appointments WHERE DATE(appointment_time) = ?`,
            [date]
        );

        const booked = rows.map((row) => new Date(row.appointment_time).toISOString());
        await connection.end();

        return {
            statusCode: 200,
            body: JSON.stringify({ slots, booked })
        };
    } catch (error) {
        console.error('Error fetching slots:', error);
        // Fallback to empty booked if DB fails locally
        return {
            statusCode: 200,
            body: JSON.stringify({ slots, booked: [] })
        };
    }
};
