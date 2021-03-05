const getAvailableDaysService = async (year, month) => {
  const availableDays = await fetch(`/api/days?year=${year}&month=${month}`)
    .then((res) => res.json())
    .catch((data) => console.log(data));

  return availableDays;
};

export { getAvailableDaysService };
