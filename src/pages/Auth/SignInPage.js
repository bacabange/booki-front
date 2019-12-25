import React, { useState, useContext, useEffect } from 'react';
import logo from '../../assets/images/Logo.png';
import AuthContext from '../../context/user/auth/authContext';
import AlertContext from '../../context/layout/alert/alertContext';

const SignInPage = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const [user, setUser] = useState({
    email: 'admin@admin.com',
    password: 'secret'
  });

  const { login, error, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    try {
      e.preventDefault();
      login({ email, password });
    } catch (error) {
      alertContext.setAlert({ error, type: 'danger', title: 'Error' });
    }
  };

  const { email, password } = user;


  return (
    <div className="container">

      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">

              <div className="columns is-centered">
                <figure className="image is-128x128">
                  <img src={logo} alt="Booki"/>
                </figure>
              </div>

              <h1 className="title">Sing in</h1>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="example@booki.co"
                    value={email}
                    onChange={onChange} />
                </div>
                {/* <p className="help">This is a help text</p> */}
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Don't write 123456"
                    value={password}
                    onChange={onChange} />
                </div>
                {/* <p className="help">This is a help text</p> */}
              </div>

              <button
                onClick={onSubmit}
                className={`button is-primary ${authContext.loading ? "button is-loading" : ""}`}
                disabled={authContext.loading}>
                  Sign In
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Booki</strong> by <a href="https://stiven.dev">Stiven Castillo</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default SignInPage;