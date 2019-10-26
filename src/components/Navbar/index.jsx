import React, {
  useState,
  useEffect,
} from 'react';

import './style.scss';

import NavbarLink from './Link';
import letrasEPIC from '../../img/letras_epic.png';
import logoUNIFEI from '../../img/logo_unifei.png';

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setVisible(window.pageYOffset > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-md fixed-top ${(visible ? 'active' : 'hidden')}`} id="navbar-fixed">
      <div className="navbar-brand">
        <img src={letrasEPIC} alt="EPIC" height="20" />
      </div>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav">
          <NavbarLink sec="navbar-nofixed" text="Home" />
          <NavbarLink sec="sec1" text="Sobre" />
          <NavbarLink sec="sec2" text="Equipes" />
          <NavbarLink sec="sec3" text="Calendário" />
          <NavbarLink sec="sec4" text="Patrocínio" />
        </div>
      </div>

      <a href="https://unifei.edu.br" target="_blank" rel="noopener noreferrer">
        <img src={logoUNIFEI} alt="Logo UNIFEI" height="92" id="logo-unifei" />
      </a>
    </nav>
  );
}
