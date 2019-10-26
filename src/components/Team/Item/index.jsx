import React from 'react';
import PropTypes from 'prop-types';

export default function TeamItem({
  name, src, members, id,
}) {
  const img = (
    <div className={`col-md-6 ${(id % 2 ? ' text-left' : ' text-right')}`}>
      <img src={require(`./img/${src}`)} alt={name} className="team-img" />
    </div>
  );

  const memberList = (
    <div className={`col-md-6 ${(id % 2 ? ' text-right' : '')}`}>
      <h1 className="team-name">{name}</h1>
      <ul className="member-list">
        {
          members.map((curr) => <li key={curr.id}>{curr}</li>)
        }
      </ul>
    </div>
  );

  return (
    <div className="row team">
      {id % 2 ? memberList : img}
      {id % 2 ? img : memberList}
    </div>
  );
}

TeamItem.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};
