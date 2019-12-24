import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/layout/Loading';

import SignInState from './context/user/auth/AuthState';
import AlertState from './context/layout/alert/AlertState';

const SignIn = React.lazy(() => import('./pages/Auth/SignInPage'));
const SignUp = React.lazy(() => import('./pages/Auth/SignUpPage'));
const RecoveryPassword = React.lazy(() => import('./pages/Auth/RecoveryPasswordPage'));
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout/DefaultLayout'));;

function App() {
  return (
    <SignInState>
      <AlertState>
        <Router>
          <React.Suspense fallback={Loading()}>
            <Switch>
              <Route
                  exact
                  path="/sign-in"
                  name="Sign In"
                  render={props => <SignIn {...props} />}
                />
                <Route
                  exact
                  path="/register"
                  name="Sign Up"
                  render={props => <SignUp {...props} />}
                />
                <Route
                  exact
                  path="/recovery-password"
                  name="Recovery Password"
                  render={props => <RecoveryPassword {...props} />}
                />
                <Route
                  path="/"
                  name="Home"
                  render={props => <DefaultLayout {...props} />}
                />
            </Switch>
          </React.Suspense>
        </Router>
      </AlertState>
    </SignInState>
  );
}

export default App;
