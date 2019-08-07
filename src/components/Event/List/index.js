import React from 'react';
import EventItem from "../Item"

const EventList = ({ events }) => (
  <tbody>
    {events.map((curr, i) => 
      <EventItem 
        date={curr.date}
        desc={curr.desc}
        key={i}
      />
    )}
  </tbody>
)

export default EventList;