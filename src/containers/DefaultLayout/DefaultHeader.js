import React, { useContext } from 'react'
import AuthContext from '../../context/user/auth/authContext';

const DefaultHeader = () => {
  const authContext = useContext(AuthContext);
  const { logout, isAuthenticated } = authContext;

  const onLogout = e => {
    e.preventDefault();
    logout();
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Logo" />
        </a>

        {/* eslint-disable-next-line */}
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {/* eslint-disable-next-line */}
          <a className="navbar-item">
            Home
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {/* eslint-disable-next-line */}
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              {/* eslint-disable-next-line */}
              <a className="button is-light">
                Log in
              </a>
            </div>
          </div>

          {
            isAuthenticated &&
              <div className="navbar-item has-dropdown is-hoverable">
                {/* eslint-disable-next-line */}
                <a className="navbar-link">
                  Name
                </a>

                <div className="navbar-dropdown">
                  {/* eslint-disable-next-line */}
                  <a className="navbar-item">
                    Profile
                  </a>
                  {/* eslint-disable-next-line */}
                  <a className="navbar-item" onClick={onLogout}>
                    Logout
                  </a>
                </div>
              </div>
          }

        </div>
      </div>
    </nav>
  );
}

export default DefaultHeader;