import React from 'react';

import './style.scss';

import TeamItem from '../Item';

export default function TeamList ({ teams }) {
  return (
    <div className="row">
      {
        teams.map((curr, i) => 
          <TeamItem
            name={curr.name}
            src={curr.src}
            members ={curr.members}
            key={i}
            i={i}
          />
        )
      }
    </div>
  )
}