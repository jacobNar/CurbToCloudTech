const mysql = require('mysql2/promise');
const fs = require('fs');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ message: 'Method Not Allowed' }) };
  }

  try {
    const data = JSON.parse(event.body);
    const { contact_name, email, phone_number, company_name, project_description, appointment_time, type } = data;

    if (!email || !appointment_time) {
        return { statusCode: 400, body: JSON.stringify({ message: 'Email and appointment time are required' }) };
    }

    // Save to Database using Environment Variables from Netlify
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    await connection.execute(
      `INSERT INTO appointments (contact_name, email, phone_number, company_name, project_description, appointment_time, type) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [contact_name, email, phone_number, company_name, project_description, new Date(appointment_time), type || 'online']
    );

    const googleMeetLink = type === 'online' ? 'https://meet.google.com/placeholder' : null;

    try {
      fs.appendFileSync('/tmp/appointment_llm.log', JSON.stringify({ action: 'appointment_booked', data }) + '\n');
    } catch (e) {
      console.warn("Could not write to log file");
    }

    await connection.end();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Appointment booked successfully!', meetLink: googleMeetLink }),
    };
  } catch (error) {
    console.error('Error booking appointment:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to book appointment.' }),
    };
  }
};
