import React, {
  useState,
  useEffect
} from 'react';

import './style.scss';

import NavbarLink from "./Link"
import letras_epic from '../../img/letras_epic.png'
import logo_unifei from '../../img/logo_unifei.png';

export default function Navbar () {

  const [ visible, setVisible ] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setVisible(window.pageYOffset > 10);
  }

  return (
    <nav className={"navbar navbar-expand-md fixed-top "+(visible ? "active" : "hidden")} id="navbar-fixed">
      <div className="navbar-brand">
        <img src={letras_epic} alt="EPIC" height='20'></img>
      </div>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav">
          <NavbarLink sec="navbar-nofixed" text="Home"></NavbarLink>
          <NavbarLink sec="sec1" text="Sobre"></NavbarLink>
          <NavbarLink sec="sec2" text="Equipes"></NavbarLink>
          <NavbarLink sec="sec3" text="Calendário"></NavbarLink>
          <NavbarLink sec="sec4" text="Patrocínio"></NavbarLink>
        </div>
      </div>

      <a href="https://unifei.edu.br" target="_blank" rel="noopener noreferrer">
        <img src={logo_unifei} alt="Logo UNIFEI" height='92' id="logo-unifei"></img>
      </a>
    </nav>
  )
}