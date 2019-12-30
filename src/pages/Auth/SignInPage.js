import React, { useState, useContext, useEffect, Suspense } from 'react';
import { useForm } from 'react-hook-form';

import logo from '../../assets/images/Logo.png';
import AuthContext from '../../context/user/auth/authContext';
import AlertContext from '../../context/layout/alert/alertContext';
import Alert from '../../components/layout/Alert';
import Loading from '../../components/layout/Loading';

const DefaultHeader = React.lazy(() => import('../../containers/DefaultLayout/DefaultHeader'));

const SignInPage = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { register, handleSubmit, watch, errors } = useForm()
  console.log("TCL: errors", errors)
  const { setAlert } = alertContext;
  const { login, error, isAuthenticated } = authContext;

  // console.log(watch('email'))

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

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

  const onSubmit = (data, e) => {
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

              <h1 className="title">Sing in</h1>

              <Alert />

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      ref={register({ required: true })}
                      name="email"
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
                      ref={register({ required: true })}
                      type="password"
                      name="password"
                      placeholder="Don't write 123456"
                      value={password}
                      onChange={onChange} />
                  </div>
                  {/* <p className="help">This is a help text</p> */}
                </div>

                {errors.exampleRequired && <span>This field is required</span>}

                <button
                  type="submit"
                  className={`button is-primary ${authContext.loading ? "button is-loading" : ""}`}
                  disabled={authContext.loading}>
                    Sign In
                </button>
              </form>

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