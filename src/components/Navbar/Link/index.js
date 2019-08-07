import React from "react"

class NavbarLink extends React.Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    e.preventDefault();
    document.getElementById(this.props.sec).scrollIntoView({behavior: 'smooth'});
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