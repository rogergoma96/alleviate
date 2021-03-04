const fs = require("fs");
const { google } = require("googleapis");
const { validateGetDays } = require("../../Utility/requirementValidator");
const { getDateFormISO, getLastDayOfMonth } = require("../../Utility/appUtil");

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
