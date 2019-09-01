import React from 'react';

import TeamItem from '../Item';

const TeamList = ({ teams }) => (
  <div className="row">
    {teams.map((curr, i) => 
      <TeamItem
        name={curr.name}
        src={curr.src}
        members ={curr.members}
        key={i}
        i={i}
      ></TeamItem>
    )}
  </div>
)

export default TeamList;