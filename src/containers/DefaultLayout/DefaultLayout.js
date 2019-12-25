import React, { Component, Suspense } from 'react'
import routes from '../../routes';
import { Redirect, Switch } from 'react-router-dom';
import Loading from '../../components/layout/Loading';
import PrivateRoute from '../../components/routing/PrivateRoute';

class DefaultLayout extends Component {
  render() {
    return (
      <>
        <Suspense fallback={Loading()}>
          <Switch>
            {routes.map(({component: Component, path, exact, name}, idx) => {
              return Component ? (
                <PrivateRoute
                  key={idx}
                  path={path}
                  exact={exact}
                  name={name}
                  component={props => <Component {...props} />}
                  />
              ) : null;
            })}
            <Redirect from="/" to="/sign-in" />
          </Switch>
        </Suspense>
      </>
    )
  }
}

export default DefaultLayout;