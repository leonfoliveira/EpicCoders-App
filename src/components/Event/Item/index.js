import React from "react"

class EventItem extends React.Component {
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

export default EventItem