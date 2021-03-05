import { useState, useEffect } from "react";
import { getAvailableDaysService } from "../services";

const Home = () => {
  const [data, setData] = useState(null);

  const getAvailableDays = async () => {
    const dataPromise = getAvailableDaysService("2021", "04");
    const availableDays = await dataPromise;

    setData(availableDays);
  };

  useEffect(() => {
    getAvailableDays();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  if (!data.days || data.days.lenght === 0) {
    return <p>No hay ningún dia disponible</p>;
  }

  return (
    <>
      <h1>Total days:</h1>
      {data.days.map((day) => (
        <p key={day.day}>
          Day {day.day}: {day.hasTimeSlots ? "Available" : "Booked"}
        </p>
      ))}
    </>
  );
};

export default Home;
