import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/user/auth/authContext';
import { Link } from 'react-router-dom';

const DefaultHeader = () => {
  const authContext = useContext(AuthContext);
  const { logout, isAuthenticated, loadUser, user } = authContext;

  useEffect(() => {
    if (!user) {
      loadUser();
    }
    // eslint-disable-next-line
  }, [user]);

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
          {
            isAuthenticated ?
              <div className="navbar-item has-dropdown is-hoverable">
                {/* eslint-disable-next-line */}
                <a className="navbar-link">
                  {user ? user.full_name : 'Account'}
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
            :
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/sign-up" className="button is-primary">
                    <strong>Sign up</strong>
                  </Link>

                  <Link to="/sign-in" className="button is-light">
                    Log in
                  </Link>
                </div>
              </div>
          }

        </div>
      </div>
    </nav>
  );
}

export default DefaultHeader;