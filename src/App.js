import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/layout/Loading';

import AuthState from './context/user/auth/AuthState';
import AlertState from './context/layout/alert/AlertState';
import PrivateRoute from './components/routing/PrivateRoute';

const SignIn = React.lazy(() => import('./pages/Auth/SignInPage'));
const SignUp = React.lazy(() => import('./pages/Auth/SignUpPage'));
const RecoveryPassword = React.lazy(() => import('./pages/Auth/RecoveryPasswordPage'));
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout/DefaultLayout'));;

function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <React.Suspense fallback={Loading()}>
            <Switch>
              <PrivateRoute
                path="/"
                exact
                name="Home"
                component={props => <DefaultLayout {...props} />}
                />
              <Route
                exact
                path="/sign-in"
                name="Sign In"
                render={props => <SignIn {...props} />}
                />
              <Route
                exact
                path="/sing-up"
                name="Sign Up"
                render={props => <SignUp {...props} />}
                />
              <Route
                exact
                path="/recovery-password"
                name="Recovery Password"
                render={props => <RecoveryPassword {...props} />}
                />
            </Switch>
          </React.Suspense>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
