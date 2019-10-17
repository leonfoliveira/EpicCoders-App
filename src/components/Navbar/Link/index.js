import React from "react"

import './style.scss';

export default function NavbarLink ({ sec, text }) {

  const clickHandler = (e) => {
    e.preventDefault();
    
    const yourElement = document.getElementById(sec);
    const yCoordinate = yourElement.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -30;

    window.scrollTo({
        top: yCoordinate + yOffset,
        behavior: 'smooth'
    });
  }

  return (
    <a href="/" className="nav-item nav-link" onClick={clickHandler}>
      {text}
    </a>
  )
}