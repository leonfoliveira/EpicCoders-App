import React from 'react';

class Event extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(
        props.date.split('/')[1]+'-'+
        props.date.split('/')[0]+'-'+
        props.date.split('/')[2]
      )
    }
  }

  render() {
    console.log(this.state.date);
    return (
      <tr className={this.state.date < new Date() ? 'passed' : 'active'}>
        <th>{this.props.date}</th>
        <th>{this.props.desc}</th>
      </tr>
    );
  }
}

class Events extends React.Component {

  getEvents = () => {
    return this.props.data.events.map(function(curr, i) {
      return <Event date={curr.date} desc={curr.desc} key={i}></Event>
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

export default Events;