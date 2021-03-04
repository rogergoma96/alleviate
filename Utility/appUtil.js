/**
 * Returns the current date in the UTC timezone.
 *
 * @returns { number } - The current date
 */
const getCurrDateUTC = () => {
  const currentDate = new Date();
  return currentDate.getUTCDate();
};

/**
 * Returns the date from a given ISOString.
 *
 * @param { string } dateISOString - The callback for the authorized client.
 * @returns { number } - The date in a ISO format
 */
const getDateFormISO = (dateISOString) => {
  const date = new Date(dateISOString);
  return date.getUTCDate();
};

/**
 * Returns the last day of the month.
 *
 * @param { number } year - The year.
 * @param { number } month - The month.
 * @returns { number } - The last day of the month.
 */
const getLastDayOfMonth = (year, month) => {
  const date = new Date(Date.UTC(year, month, 0));
  return date.getUTCDate();
};

/**
 * Creates and returns a Google Calendars 'events resource'.
 *
 * @param { string } date -  A string in the following format: 'Year-month-day'.
 * @param { string } startTime - The start time to associate with the 'start dateTime'.
 * @param { string } endTime - The end time to associate with the 'end dateTime'.
 * @returns { object } - A Google Calendars 'events resource'.
 */
const makeEventResource = (date, startTime, endTime) => ({
  summary: "Reserva limpieza",
  location: "Dirección",
  start: {
    dateTime: date + "T" + startTime + "+01:00",
    timeZone: "UTC",
  },
  end: {
    dateTime: date + "T" + endTime + "+01:00",
    timeZone: "UTC",
  },
  attendees: [{ email: "wayteoapp@gmail.com" }],
});

/**
 * Returns the next date (i.e the day after).
 *
 * @param { Date } date - The date to get the next day of.
 * @returns { Date }
 */
const getNextDay = (date) => {
  const tomorrow = new Date(date);
  tomorrow.setDate(date.getUTCDate() + 1); // Returns epoch value.
  return new Date(tomorrow); // Convert from epoch to Date.
};

module.exports = {
  getCurrDateUTC,
  getDateFormISO,
  getLastDayOfMonth,
  getNextDay,
  makeEventResource,
};
