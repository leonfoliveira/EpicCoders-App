import React from 'react';
import MemberItem from '../Item'

import './style.scss';

export default function MemberList ({ members }) {
  return (
    <div className="row">
      {members.map((curr, i) =>
        <MemberItem 
          team={curr.team}
          name={curr.name}
          key={i} 
        />
      )}
    </div>
  );
}