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
  getNextDay,
  makeEventResource,
};
