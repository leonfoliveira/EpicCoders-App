import React, {
  useState,
  useEffect
} from 'react';
import EventItem from "../Item"

export default function CalendarList ({ events }) {
  
  const [ today, setToday ] = useState();

  useEffect(() => {
    const fetchToday = async () => {
      try {
        let response = await fetch('http://worldclockapi.com/api/json/est/now');
        if (response.status !== 200) {
          setToday(new Date());
          return;
        }

        let data = await response.json();
        if (data.currentDateTime === null) {
          setToday(new Date());
          return;
        }

        setToday(new Date(data.currentDateTime));
      } catch (err) {
        setToday(new Date());
      }
    }

    fetchToday();
  }, []);

  return (
    <tbody>
      {
        events.map((curr, i) => 
          <EventItem 
            date={curr.date}
            today={today}
            desc={curr.desc}
            key={i}
          />
        )
      }
    </tbody>
  );
}