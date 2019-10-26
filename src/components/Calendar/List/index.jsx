import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import EventItem from '../Item';

export default function CalendarList({ events }) {
  const [today, setToday] = useState();

  useEffect(() => {
    const fetchToday = async () => {
      try {
        const response = await fetch('http://worldclockapi.com/api/json/est/now');
        if (response.status !== 200) {
          setToday(new Date());
          return;
        }

        const data = await response.json();
        if (data.currentDateTime === null) {
          setToday(new Date());
          return;
        }

        setToday(new Date(data.currentDateTime));
      } catch (err) {
        setToday(new Date());
      }
    };

    fetchToday();
  }, []);

  return (
    <tbody>
      {
        events.map((curr) => (
          <EventItem
            date={curr.date}
            today={today}
            desc={curr.desc}
            key={curr.id}
          />
        ))
      }
    </tbody>
  );
}

CalendarList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.instanceOf(Date),
    desc: PropTypes.string,
  })).isRequired,
};
