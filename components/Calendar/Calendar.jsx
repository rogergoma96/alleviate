import { useRef, useState } from "react";
import { getAvailableTimeSlots, bookTimeSlotService } from "../../services";
import Header from "./Header/Header";
import styles from "./Calendar.module.scss";

const Calendar = ({ data, year, month }) => {
  const [slots, setSlots] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const firstMonthDay = useRef(new Date(`${year}-${month}-01`));
  const firstDayCss = { gridColumn: firstMonthDay.current.getDay() + 1 };

  const getTimeSlots = async (day) => {
    setSelectedDay(day);
    const dataPromise = getAvailableTimeSlots(year, month, day);
    const availableTimeSlots = await dataPromise;

    setSlots(availableTimeSlots);
  };

  const bookTimeSlot = async (startTime) => {
    const [hour, minute] = startTime.split(":");
    const dataPromise = bookTimeSlotService(
      year,
      month,
      selectedDay,
      hour,
      minute
    );
    const response = await dataPromise;

    if (response.success) {
      getTimeSlots(selectedDay);
    }
  };

  return (
    <div>
      <div className={styles.days}>
        <Header />
        {data.days.map((day, index) => (
          <button
            type="button"
            className={`btn-primary ${styles.day} ${
              selectedDay === day.day ? styles["day--selected"] : ""
            }`}
            disabled={day.isInPast || !day.hasTimeSlots}
            key={day.day}
            style={index === 0 ? firstDayCss : {}}
            onClick={() => getTimeSlots(day.day)}
          >
            <time dateTime={`${year}-${month}-${day.day}`}>{day.day}</time>
          </button>
        ))}
      </div>
      {slots &&
        slots.timeslots &&
        slots.timeslots.map((timeSlot) => (
          <button
            key={timeSlot.startTime}
            type="button"
            onClick={() => bookTimeSlot(timeSlot.startTime)}
          >
            {`Start time: ${timeSlot.startTime} - End time: ${timeSlot.endTime}`}
          </button>
        ))}
    </div>
  );
};

export default Calendar;
