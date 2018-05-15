import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <section className="hero is-light is-small">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img
                    src="http://lancekey.com/images/lancekey_words_white.png"
                    alt="Logo"
                  />
                </a>
              </div>
            </div>
          </nav>
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Lancekey Public Github Repos</h1>
              <h2 className="subtitle">
                all our public code at your fingertips
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
