import React from 'react'

import image from '../../img/user.jpg';

export default function MemberItem ({ name, team }) {
  return (
    <div className="col-sm-4 text-center">
      <div className="member">
        <img src={image} alt={name}></img>
        <h5>{name}</h5>
        <h3>{team}</h3>
      </div>
    </div>
  );
}