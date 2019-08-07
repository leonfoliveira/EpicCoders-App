import React from 'react'

import image from './img/user.jpg';

const MemberItem = props => (
  <div className="col-sm-4 text-center">
    <div className="member">
      <img src={image} alt={props.name}></img>
      <h5>{props.name}</h5>
      <h3>{props.team}</h3>
    </div>
  </div>
)

export default MemberItem