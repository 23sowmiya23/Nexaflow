const { config } = require('dotenv');
const { google } = require('googleapis');
const path = require('path');

exports.getData = async (req, res) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(__dirname, '..', 'config', 'servicefile.json'),
 // Update the path to your service account file
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });
    

    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Sheet1!A1:D10', // Adjust the range as needed
    });

    res.status(200).json(response.data.values);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }s
};
