import React from 'react';

const events_json = [
  {
    "date":"23/03/2019",
    "desc":"1ª Seletiva para Maratona Mineira de Programação"
  },
  {
    "date":"13/04/2019",
    "desc":"2ª Seletiva para Maratona Mineira de Programação"
  },
  {
    "date":"25/05/2019",
    "desc":"Maratona Mineira de Programação"
  },
  {
    "date":"25/05/2019",
    "desc":"Epic Coders Cups"
  },
  {
    "date":"10/08/2019",
    "desc":"1ª Seletiva para Regional da Maratona de Programação"
  },
  {
    "date":"31/08/2019",
    "desc":"2ª Seletiva para Regional da Maratona de Programação"
  },
  {
    "date":"14/09/2019",
    "desc":"Regional da Maratona de Programação"
  },
  {
    "date":"19/10/2019",
    "desc":"Code Cup UNIFEI"
  },
  {
    "date":"08/11/2019",
    "desc":"Maratona de Programação"
  }
]

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
    return events_json.map(function(curr, i) {
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