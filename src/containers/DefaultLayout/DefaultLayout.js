import React, { Component, Suspense } from 'react'
import routes from '../../routes';
import { Redirect, Switch } from 'react-router-dom';
import Loading from '../../components/layout/Loading';
import PrivateRoute from '../../components/routing/PrivateRoute';
import Alert from '../../components/layout/Alert';

const DefaultHeader = React.lazy(() => import('./DefaultHeader'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));

class DefaultLayout extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Suspense fallback={Loading()}>
            <DefaultHeader />
          </Suspense>

          <Alert />

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

          <Suspense fallback={Loading()}>
            <DefaultFooter />
          </Suspense>
        </div>

      </>
    )
  }
}

export default DefaultLayout;