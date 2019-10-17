import React, {
  useState,
  useEffect
} from 'react';
import EventItem from "../Item"

export default function CalendarList ({ events }) {
  
  const [ today, setToday ] = useState();

  useEffect(() => {
    const fetchToday = async () => {
      let response = await fetch('http://worldclockapi.com/api/json/est/now');
      let data = await response.json();

      setToday(new Date(data.currentDateTime));
    }

    fetchToday();
  })

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