import React from 'react';

import NavbarLink from "./Link"
import letras_epic from '../../img/letras_epic.png'

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({
      visible: window.pageYOffset > 10
    });
  }

  render() {
    return (
      <nav className={"navbar navbar-expand-lg fixed-top "+(this.state.visible ? "active" : "hidden")} id="navbar-fixed">
        <a className="navbar-brand" href="/">
          <img src={letras_epic} alt="EPIC" height='20'></img>
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <NavbarLink sec="sec0" text="Home"></NavbarLink>
                <NavbarLink sec="sec1" text="Sobre"></NavbarLink>
                <NavbarLink sec="sec2" text="Membros"></NavbarLink>
                <NavbarLink sec="sec3" text="Calendário"></NavbarLink>
                <NavbarLink sec="sec4" text="Patrocínio"></NavbarLink>
            </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;