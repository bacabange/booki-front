import React from 'react';

// const Home = React.lazy(() => import('./pages/HomePage'));
const Profile = React.lazy(() => import('./pages/User/ProfilePage'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/profile', name: 'Profile', component: Profile },
];

export default routes;
