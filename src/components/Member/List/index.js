import React from 'react';
import MemberItem from '../Item'

class MemberList extends React.Component {
  getMembers = () => {
    return this.props.data.members.map(function(curr, i) {
      return <MemberItem team={curr.team} name={curr.name} key={i}></MemberItem>
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

export default MemberList;