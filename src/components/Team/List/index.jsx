import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import TeamItem from '../Item';

export default function TeamList({ teams }) {
  return (
    <div className="row">
      {
        teams.map((curr) => (
          <TeamItem
            name={curr.name}
            src={curr.src}
            members={curr.members}
            key={curr.id}
            id={curr.id}
          />
        ))
      }
    </div>
  );
}

TeamList.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};
