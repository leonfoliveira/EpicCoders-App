import React from 'react';
import PropTypes from 'prop-types';

export default function CalendarItem({ date, today, desc }) {
  const normalizedDate = new Date(`${date.split('/')[2]}-${date.split('/')[1]}-${date.split('/')[0]}`);

  return (
    <tr className={normalizedDate < today ? 'passed' : 'active'}>
      <th>{date}</th>
      <th>{desc}</th>
    </tr>
  );
}

CalendarItem.propTypes = {
  date: PropTypes.string.isRequired,
  today: PropTypes.instanceOf(Date).isRequired,
  desc: PropTypes.string.isRequired,
};
