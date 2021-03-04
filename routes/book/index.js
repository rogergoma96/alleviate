const fs = require("fs");
const { google } = require("googleapis");
const { validateBooking } = require("../../Utility/requirementValidator");
const { makeEventResource } = require("../../Utility/appUtil");

const findMatchingTimeslot = (year, month, day, hour, minute) => {
  const timeslotDate = new Date(
    Date.UTC(year, month - 1, day, hour, minute)
  ).toISOString();

  const timeslotDateFormated = timeslotDate.substring(
    timeslotDate.indexOf("T") + 1,
    timeslotDate.indexOf(".")
  );

  const timeslots = JSON.parse(fs.readFileSync("./Utility/timeslots.json"))
    .timeslots;

  const foundTimeslot = timeslots.find((element) => {
    return element.startTime.includes(hour + ":" + minute + ":00");
  });

  if (!foundTimeslot) {
    return false;
  }

  return { time: foundTimeslot, date: timeslotDateFormated };
};

const bookTimeslot = (auth, year, month, day, hour, minute) => {
  return new Promise((resolve, reject) => {
    const isInValid = validateBooking(year, month, day, hour, minute);

    if (isInValid) {
      reject(isInValid);
    }

    const timeslot = findMatchingTimeslot(year, month, day, hour, minute);

    if (!timeslot) {
      return resolve({ success: false, message: "Invalid time slot" });
    }

    const date = year + "-" + month + "-" + day;
    const event = makeEventResource(
      date,
      timeslot.time.startTime,
      timeslot.time.endTime
    );

    const calendar = google.calendar({ version: "v3", auth });

    calendar.events.insert(
      {
        auth,
        calendarId: "primary",
        resource: event,
        sendUpdates: "all",
      },
      (err, res) => {
        if (err) {
          return console.log("Error connecting the calendar service:" + err);
        }

        const event = res.data;
        const result = {
          startTime: event.start.dateTime,
          endTime: event.end.dateTime,
        };
        const response = Object.assign({ success: true }, result);

        return resolve(response);
      }
    );
  });
};

/**
 * Handle 'book' POST request
 *
 * @param { object } req - The requests object provided by Express. See Express doc.
 * @param { object } res - The results object provided by Express. See Express doc.
 * @param { object } auth - The oAuth2Client used for authentication for the Google Calendar API.
 */
const handleBookTimeslot = (req, res, auth) => {
  const year = req.query.year;
  const month = req.query.month;
  const day = req.query.day;
  const hour = req.query.hour;
  const minute = req.query.minute;

  bookTimeslot(auth, year, month, day, hour, minute)
    .then((data) => res.send(data))
    .catch((data) => res.send(data));
};

module.exports = { handleBookTimeslot };
