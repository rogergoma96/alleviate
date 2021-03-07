import { useEffect, useState, useRef } from 'react';
import { getAvailableDaysService } from '../services';
import Calendar from '../components/Calendar/Calendar';

const Home = () => {
  const year = useRef(new Date().getUTCFullYear());
  const month = useRef(new Date().getUTCMonth() + 1);
  const [data, setData] = useState(null);

  const getAvailableDays = async () => {
    const dataPromise = getAvailableDaysService(year.current, month.current);
    const availableDays = await dataPromise;

    setData(availableDays);
  };

  useEffect(() => {
    getAvailableDays();
  }, []);

  if (!data) {
    return <p>Loading ...</p>;
  }

  if (!data || data.lenght === 0) {
    return <p>No hay ningún dia del mes disponible</p>;
  }

  return (
    <Calendar data={data} year={year.current} month={month.current} />
  );
};

export default Home;
