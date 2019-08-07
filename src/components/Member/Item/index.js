import React from 'react'

import image from './img/user.jpg';

const MemberItem = ({ name, team }) => (
  <div className="col-sm-4 text-center">
    <div className="member">
      <img src={image} alt={name}></img>
      <h5>{name}</h5>
      <h3>{team}</h3>
    </div>
  </div>
)

export default MemberItem