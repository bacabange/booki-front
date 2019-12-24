import React, { useState, useContext } from 'react';
import logo from '../../assets/images/Logo.png';
import AuthContext from '../../context/user/auth/authContext';
import AlertContext from '../../context/layout/alert/alertContext';

const SignInPage = () => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onSubmit = e => {
    try {
      e.preventDefault();
      authContext.login({ email, password });
    } catch (error) {
      console.log("TCL: SignInPage -----> error", error)
      alertContext.setAlert({ error, type: 'danger', title: 'Error' });
    }
  };

  console.log(authContext.error);

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
                    onChange={(e) => setEmail(e.target.value)} />
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
                    onChange={(e) => setPassword(e.target.value)} />
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