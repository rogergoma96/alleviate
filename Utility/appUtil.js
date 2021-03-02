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
}

module.exports = {
  getNextDay,
};