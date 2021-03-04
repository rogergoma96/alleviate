const fs = require("fs");
const { google } = require("googleapis");
const { validateGetDays } = require("../../Utility/requirementValidator");
const { getDateFormISO, getLastDayOfMonth } = require("../../Utility/appUtil");

/**
 * Searches through the given events (appointments), sees which appointments span
 * across a full days timeslots (11). If 11 appointment events are found within a
 * same day, then the day which those appointments fell on, is added to the bookedDays array.
 *
 * @param { number } events - Appointment events.
 * @returns { number[] } bookedDays - An array containing the days that are fully booked.
 */
const getBookedDays = (items) => {
  let bookedDays = [];
  let date = null;
  let dayArr = [];
  let prevDate = null;

  items.forEach((item) => {
    date = getDateFormISO(item.start.dateTime);

    if (date === prevDate || prevDate === null) {
      dayArr.push(item);
    } else {
      dayArr = [];
      dayArr.push(item);
    }

    prevDate = getDateFormISO(item.start.dateTime);
    const timeslots = JSON.parse(fs.readFileSync("./Utility/timeslots.json"))
      .timeslots;

    if (dayArr.length === timeslots.length) {
      dayArr = [];
      bookedDays.push(date);
    }
  });

  return bookedDays;
};

/**
 * Uses the bookedDays value returned from getBookedDays() to create an array containing
 * info on whether the day has any timeslots available or not.
 *
 * @param { number } - endDate  End date of the month.
 * @param { number[] } - bookedDays  An array containing the days that are fully booked.
 * @returns { object[] } - daysArr  An array containing objects which represent the days of
 * the month, and whether the day has any timeslots available.
 */
const makeDaysArr = (endDate, bookedDays) => {
  let daysArr = [];

  for (let day = 1; day <= endDate; day++) {
    if (bookedDays.includes(day)) {
      daysArr.push({ day, hasTimeSlots: false });
    } else {
      daysArr.push({ day, hasTimeSlots: true });
    }
  }

  return daysArr;
};

/**
 * Returns a promise with data containing objects with information on whether the days in the given
 * month have any timeslots available. Days with no timeslots are considered fully booked.
 *
 * @param { object } auth - The oAuth2Client used for authentication for the Google Calendar API.
 * @param { number } year - Year to search for.
 * @param { number } month - Month to search for.
 * @returns { promise } - A promise representing the eventual completion of the getBookableDays() function.
 */
const getBookableDays = (auth, year, month) => {
  return new Promise((resolve, reject) => {
    const isInValid = validateGetDays(year, month);

    if (isInValid) {
      reject(isInValid);
    }

    const startDate = new Date(Date.UTC(year, month - 1));
    const endDate = new Date(Date.UTC(year, month));

    const calendar = google.calendar({ version: "v3", auth });

    calendar.events.list(
      {
        auth,
        calendarId: "primary",
        maxResults: 350,
        orderBy: "startTime",
        q: "Reserva limpieza",
        singleEvents: true,
        timeMax: endDate.toISOString(),
        timeMin: startDate.toISOString(),
      },
      (err, res) => {
        if (err) {
          return reject({
            success: false,
            message: "The API returned an error: " + err,
          });
        }

        const { items } = res.data;

        const lastDay = getLastDayOfMonth(year, month);
        let result = { days: makeDaysArr(lastDay, getBookedDays(items)) };
        const response = Object.assign({ success: true }, result);

        return resolve(response);
      }
    );
  });
};

/**
 * Handles 'days' GET requests.
 *
 * @param { object } req - The requests object provided by Express. See Express doc.
 * @param { object } res - The results object provided by Express. See Express doc.
 * @param { object } auth - The oAuth2Client used for authentication for the Google Calendar API.
 */
const handleGetDays = (req, res, auth) => {
  const { year } = req.query;
  const { month } = req.query;

  getBookableDays(auth, year, month)
    .then((data) => res.send(data))
    .catch((data) => res.send(data));
};

module.exports = {
  handleGetDays,
};
