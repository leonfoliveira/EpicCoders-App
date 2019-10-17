import React from "react"

export default function CalendarItem ({ date, desc }) {
  const normalizedDate = new Date(
    date.split('/')[1]+'-'+
    date.split('/')[0]+'-'+
    date.split('/')[2]
  )

  return (
    <tr className={normalizedDate < new Date() ? 'passed' : 'active'}>
      <th>{date}</th>
      <th>{desc}</th>
    </tr>
  );
}