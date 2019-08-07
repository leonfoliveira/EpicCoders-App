import React from 'react';

import image from '../../img/user.jpg';

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
    return this.props.data.members.map(function(curr, i) {
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