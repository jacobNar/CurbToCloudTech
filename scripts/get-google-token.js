const { google } = require('googleapis');
const http = require('http');
const url = require('url');
require('dotenv').config({ path: '.env' });

const PORT = 3001;
const REDIRECT_URI = `http://localhost:${PORT}/oauth2callback`;

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    REDIRECT_URI
);

const scopes = [
    'https://www.googleapis.com/auth/calendar.events',
    'https://www.googleapis.com/auth/calendar.readonly'
];

const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    prompt: 'consent' // Important: this forces Google to return a refresh_token
});

console.log('\n=========================================');
console.log('1. Go to your Google Cloud Console.');
console.log('2. Navigate to APIs & Services -> Credentials.');
console.log(`3. Under your OAuth 2.0 Client ID, add this Exact URI to "Authorized redirect URIs":`);
console.log(`   ${REDIRECT_URI}`);
console.log('   (Save your changes)');
console.log('=========================================\n');
console.log('THEN, authorize this app by visiting this url in your browser:');
console.log(authUrl);
console.log('\nWaiting for authorization code...\n');

const server = http.createServer(async (req, res) => {
    if (req.url.startsWith('/oauth2callback')) {
        const q = url.parse(req.url, true).query;
        if (q.error) {
            console.log('Error:' + q.error);
            res.end('Error parsing code.');
            process.exit(1);
        } else {
            console.log('Code received. Exchanging for tokens...');
            res.end('Authentication successful! You can close this tab and return to the terminal.');
            server.close();
            try {
                const { tokens } = await oauth2Client.getToken(q.code);
                console.log('\n\n--- SUCCESS ---');
                console.log('\nYour Refresh Token is:\n');
                console.log(tokens.refresh_token);
                console.log('\nADD THIS LINE TO YOUR .env FILE:');
                console.log(`GOOGLE_REFRESH_TOKEN="${tokens.refresh_token}"`);
                console.log('-----------------\n');
            } catch (err) {
                console.error('Error getting token:', err);
            }
            process.exit(0);
        }
    }
}).listen(PORT, () => {
    // server started
});
