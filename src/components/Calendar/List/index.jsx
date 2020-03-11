import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import CalendarItem from '../Item';

export default function CalendarList({ events }) {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    (async () => {
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
    })();
  }, [events]);

  return (
    <tbody>
      {
        events.map((curr) => (
          <CalendarItem
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
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};
