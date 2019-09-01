import React from "react"

class NavbarLink extends React.Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    e.preventDefault();  
    
    const yourElement = document.getElementById(this.props.sec);
    const yCoordinate = yourElement.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -30;

    window.scrollTo({
        top: yCoordinate + yOffset,
        behavior: 'smooth'
    });
  }

  render() {
    return (
      <a href="/" className="nav-item nav-link" onClick={this.onClickHandler}>
        {this.props.text}
      </a>
    )
  }
}

export default NavbarLink