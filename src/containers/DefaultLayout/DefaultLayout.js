import React, { Component, Suspense } from 'react'
import routes from '../../routes';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from '../../components/layout/Loading';

class DefaultLayout extends Component {
  render() {
    return (
      <>
        <Suspense fallback={Loading()}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => <route.component {...props} />}
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