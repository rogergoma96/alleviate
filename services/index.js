const bookTimeSlotService = async (year, month, day, hour, minute) => {
  const response = await fetch(`/api/book?year=${year}&month=${month}&day=${day}&hour=${hour}&minute=${minute}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((data) => console.log(data));

  return response;
};

const getAvailableDaysService = async (year, month) => {
  const availableDays = await fetch(`/api/days?year=${year}&month=${month}`)
    .then((res) => res.json())
    .catch((data) => console.log(data));

  return availableDays;
};

const getAvailableTimeSlots = async (year, month, day) => {
  const availableTimeSlots = await fetch(`/api/timeslots?year=${year}&month=${month}&day=${day}`)
    .then((res) => res.json())
    .catch((data) => console.log(data));

  return availableTimeSlots;
};

export { getAvailableDaysService, getAvailableTimeSlots, bookTimeSlotService };
