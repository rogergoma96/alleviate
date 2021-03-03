const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/calendar'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = './Utility/token.json';
const CREDENTIALS_PATH = './google-credentials.json';

// Load client secrets from a local file.
function initAuthorize(callback) {
  fs.readFile(CREDENTIALS_PATH, (err) => {
    if (err) {
      console.log('The google-credentials.json file could not be found or was invalid. \n' +
        'Please visit: https://developers.google.com/calendar/quickstart/nodejs \n' +
        'and generate a google-credentials.json file from that site. Then, place your \n' +
        'credentials file into the "Utility" directory of this application.');
      process.exit(1);
    }
    console.log(JSON.parse('{"installed":{"client_id":"779870473145-e2046lbjmaivrqs83ljge2c1c5grijtp.apps.googleusercontent.com","project_id":"alleviate-1614716115292","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"adUCs9xzTxlmNGdrdwPvsiS7","redirect_uris":[]}}'));
    // Authorize a client with credentials, then call the Google Calendar API.
    authorize(JSON.parse('{"installed":{"client_id":"779870473145-e2046lbjmaivrqs83ljge2c1c5grijtp.apps.googleusercontent.com","project_id":"alleviate-1614716115292","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"adUCs9xzTxlmNGdrdwPvsiS7","redirect_uris":[]}}'), callback);
  });
}

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {function} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({ access_type: 'offline', scope: SCOPES });

  console.log('Authorize this app by visiting this url:', authUrl);

  const rl = readline.createInterface({input: process.stdin, output: process.stdout});
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

module.exports = {
  SCOPES,
  initAuthorize
};