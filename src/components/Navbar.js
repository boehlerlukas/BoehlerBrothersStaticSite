import React from 'react';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <div>
        <div id="topbar">
          <h1>
            <a href="/" id="logo">
              <img src="/img/BoehlerBrothersLogo.svg" alt="BoehlerBrothers Logo" />
            </a>
          </h1>
          <a href="#" id="menu-toggler">
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </a>
        </div>
        <div id="menu-overlay">
          <div id="menu">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="works.html">Portfolio</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="service.html">Service</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="blog.html">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
