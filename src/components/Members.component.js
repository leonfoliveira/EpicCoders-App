import React from 'react';

import image from '../img/user.jpg';

const members_json = [
  {
    "team":"[coach]",
    "name":"Roberto Affonso"
  },
  {
    "team":"[coach]",
    "name":"Edmilson Moreira"
  },
  {
    "team":"[coach]",
    "name":"Júnior Andrade"
  },
  {
    "team":"[EPIC Nuclear Guys]",
    "name":"Felipe Kallás"
  },
  {
    "team":"[EPIC Nuclear Guys]",
    "name":"Marcos Antonio"
  },
  {
    "team":"[EPIC Nuclear Guys]",
    "name":"?"
  },
  {
    "team":"[Time do Zeh]",
    "name":"José Silva"
  },
  {
    "team":"[Time do Zeh]",
    "name":"David Batista"
  },
  {
    "team":"[Time do Zeh]",
    "name":"Tarik Moallen"
  },
  {
    "team":"[.++]",
    "name":"Leonardo Oliveira"
  },
  {
    "team":"[.++]",
    "name":"Eduardo Oliveira"
  },
  {
    "team":"[.++]",
    "name":"Dener Ribeiro"
  },
  {
    "team":"[Troco Teammate por AC]",
    "name":"Gustavo Guerra"
  },
  {
    "team":"[Troco Teammate por AC]",
    "name":"Edgar Almeida"
  },
  {
    "team":"[Troco Teammate por AC]",
    "name":"Ricardo Dalarme"
  }
]

const Member = props => (
  <div className="col-sm-4 text-center">
    <div className="member">
      <img src={image} alt={props.name}></img>
      <h5>{props.name}</h5>
      <h3>{props.team}</h3>
    </div>
  </div>
)

class Members extends React.Component {

  getMembers = () => {
    return members_json.map(function(curr, i) {
      return <Member team={curr.team} name={curr.name} key={i}></Member>
    })
  }

  render() {
    return (
      <div className="row">
        { this.getMembers() }
      </div>
    )
  }
}

export default Members;