import React from 'react';
import EventItem from "../Item"

export default function CalendarList ({ events }) {
  return (
    <tbody>
      {
        events.map((curr, i) => 
          <EventItem 
            date={curr.date}
            desc={curr.desc}
            key={i}
          />
        )
      }
    </tbody>
  );
}