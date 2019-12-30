import React, { useState, useContext, useEffect, Suspense } from 'react';
import logo from '../../assets/images/Logo.png';
import AuthContext from '../../context/user/auth/authContext';
import AlertContext from '../../context/layout/alert/alertContext';
import Alert from '../../components/layout/Alert';
import Loading from '../../components/layout/Loading';

const DefaultHeader = React.lazy(() => import('../../containers/DefaultLayout/DefaultHeader'));

const SignUpPage = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const [user, setUser] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  });

  const { setAlert } = alertContext;
  const { register, error, isAuthenticated } = authContext;
  const { email, password, first_name, last_name } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error && error.status === 401) {
      setAlert("Your credentials are incorrect", 'danger');
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    try {
      e.preventDefault();
      register({ email, password, first_name, last_name });
    } catch (error) {
      alertContext.setAlert({ error, type: 'danger', title: 'Error' });
    }
  };

  return (
    <div className="container">

      <Suspense fallback={Loading()}>
        <DefaultHeader />
      </Suspense>

      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">

              <div className="columns is-centered">
                <figure className="image is-128x128">
                  <img src={logo} alt="Booki"/>
                </figure>
              </div>

              <h1 className="title">Sing Up</h1>

              <Alert />

              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    name="first_name"
                    type="text"
                    placeholder="Jhon Doe"
                    value={first_name}
                    onChange={onChange} />
                </div>
                {/* <p className="help">This is a help text</p> */}
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    name="email"
                    type="email"
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
                    name="password"
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
                  Sign Up
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

export default SignUpPage;