import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
  <header className="header hero is-light">
    <div className="hero-head">
      <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

          <a className="navbar-item">
            <img src="/bulma-admin-dashboard-template/logo.png" alt="Bulma Admin Template logo" />
          </a>
          <a className="navbar-item is-tab is-hidden-mobile is-active"><span className="icon is-medium"><i className="fa fa-home"></i></span>Home</a>
          <a className="navbar-item is-tab is-hidden-mobile">Features</a>
          <a className="navbar-item is-tab is-hidden-mobile">Pricing</a>
          <a className="navbar-item is-tab is-hidden-mobile">About</a>
          
          <button className="button navbar-burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>


        <div className="navbar-menu navbar-end" id="navMenu">
          <a className="navbar-item is-tab is-hidden-tablet is-active">Home</a>
          <a className="navbar-item is-tab is-hidden-tablet">Features</a>
          <a className="navbar-item is-tab is-hidden-tablet">Pricing</a>
          <a className="navbar-item is-tab is-hidden-tablet">About</a>
          <a className="navbar-item nav-tag">              
            <span className="icon is-small">
              <i className="fa fa-envelope-o"></i>
            </span>
            <span className="tag is-primary tag-notif">6</span>
          </a>  
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">              
              <figure className="image is-32x32" Style="margin-right:.5em;">
                <img src="https://avatars1.githubusercontent.com/u/7221389?v=4&s=32"/>
              </figure>
              mazipan
            </a>
          
            <div className="navbar-dropdown is-right">              
                <a className="navbar-item">
                  <span className="icon is-small">
                    <i className="fa fa-user-o"></i>
                  </span>
                  Profile
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  <span className="icon is-small">
                    <i className="fa fa-power-off"></i>
                  </span>
                  Logout
                </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
    );
  }
}

export default Header;
