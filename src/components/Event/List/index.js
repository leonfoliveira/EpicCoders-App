import React from 'react';
import EventItem from "../Item"

class EventList extends React.Component {
  getEvents = () => {
    return this.props.data.events.map(function(curr, i) {
      return <EventItem date={curr.date} desc={curr.desc} key={i}></EventItem>
    })
  }

  render() {
    return (
      <tbody>
        { this.getEvents() }
      </tbody>
    )
  }
}

export default EventList;