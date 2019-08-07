import React from 'react';
import MemberItem from '../Item'

const MemberList = ({ members }) => (
  <div className="row">
    {members.map((curr, i) =>
      <MemberItem 
        team={curr.team} 
        name={curr.name} 
        key={i} 
      />
    )}
  </div>
)

export default MemberList;