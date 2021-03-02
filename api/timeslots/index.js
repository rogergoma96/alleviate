const fs = require('fs');
const { google } = require('googleapis');
const reqValidator = require('../../Utility/requirementValidator');
const appUtil = require('../../Utility/appUtil');
const TIMESLOTS_PATH = './Utility/timeslots.json';

/**
 * Returns an array with timeslots; excluding the timeslots that are booked (appointments).
 *
 * @param { object } appointments - An Object containing info on the appointments booked in the day.
 * @returns { array } resultsArr - An array containing all the available timeslots in the day.
 */
const getResult = (appointments) => {
  const timeslots = (JSON.parse(fs.readFileSync(TIMESLOTS_PATH))).timeslots;
  let resultsArr = [];

  for (let i = 0; i < timeslots.length; i++) {
    const found = appointments.find(function (element) {
      const startTime = element.startTime;
      const finalStartTime = startTime.substring(startTime.indexOf('T') + 1, startTime.indexOf('+'));
      return timeslots[i].startTime.includes(finalStartTime);
    });

    if (!found) {
      resultsArr.push(timeslots[i]);
    }
  }

  return resultsArr;
};

/**
 * Returns a promise with data containing objects with information of the timeslots in the given day.
 * Each object contains the startTime and endTime of the timeslot.
 *
 * @param { object } auth - The oAuth2Client used for authentication for the Google Calendar API.
 * @param { number } year - Year to search for.
 * @param { number } month - Month to search for.
 * @param { number } day - Day to search for.
 * @returns { promise } - A promise representing the eventual completion of the getAvailTimeslots() function.
 */
const getAvailTimeslots = (auth, year, month, day) => {
  return new Promise((resolve, reject) => {
    const isInvalid = reqValidator.validateGetTimeslots(year, month, day);

    if (isInvalid) {
      return reject(isInvalid);
    }

    const startDate = new Date(Date.UTC(year, month-1, day));
    const endDate = appUtil.getNextDay(startDate);
    const calendar = google.calendar({version: 'v3', auth});

    calendar.events.list({
      calendarId: 'primary',
      timeMin: startDate.toISOString(),
      timeMax: endDate.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    }, (err, res) => {
      if (err) {
        return reject({ response: 'The API returned an error: ' + err });
      }

      const bookings = res.data.items.map((event) => {
        return { startTime: event.start.dateTime, endTime: event.end.dateTime };
      });

      const result = {};
      result.timeslots = getResult(bookings);

      if (result.timeslots[0]) {
        const response = Object.assign({ success: true }, result);
        return resolve(response);
      } else {
        const response = Object.assign({ success: false }, result);
        return reject(response);
      }
    });
  });
};

/**
 * Handles 'timeslots' GET requests.
 *
 * @param { object } req - The requests object provided by Express. See Express doc.
 * @param { object } res - The results object provided by Express. See Express doc.
 * @param { object } auth - The oAuth2Client used for authentication for the Google Calendar API.
 */
const getTimeslots = (req, res, auth) => {
  const year = req.query.year;
  const month = req.query.month;
  const day = req.query.day;
  
  getAvailTimeslots(auth, year, month, day)
    .then((data) => res.send(data))
    .catch((data) => res.send(data));
};

module.exports = { getTimeslots };
