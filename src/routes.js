import React from 'react';

const SignIn = React.lazy(() => import('./pages/Auth/SignInPage'));
const SignUp = React.lazy(() => import('./pages/Auth/SignUpPage'));
const RecoveryPassword = React.lazy(() => import('./pages/Auth/RecoveryPasswordPagePage'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/auth/signin', name: 'SignIn', component: SignIn },
  { path: '/auth/signup', name: 'SignUp', component: SignUp },
  { path: '/auth/recovery-password', name: 'RecoveryPassword', component: RecoveryPassword },
];

export default routes;
