import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function NavbarLink({ sec, text }) {
  const clickHandler = (e) => {
    e.preventDefault();

    const element = document.getElementById(sec);
    const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -30;

    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: 'smooth',
    });
  };

  return (
    <a href="/" className="nav-item nav-link" onClick={clickHandler}>
      {text}
    </a>
  );
}

NavbarLink.propTypes = {
  sec: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
