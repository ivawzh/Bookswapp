import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import LandingPage from './LandingPage';
import SignUpPage from './auth/SignUp';
import LoginPage from './auth/Login';
import PasswordResetForm from './auth/PasswordResetForm';
import HomePage from './HomePage';
import withAuthentication from './auth/session/withAuthentication';
import * as routes from '../constants/routes';


const App = () =>
  <Router>
    <div>
      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGNUP} component={SignUpPage} />
      <Route exact path={routes.LOGIN} component={LoginPage} />
      <Route exact path={routes.PASSWORD_RESET} component={PasswordResetForm} />
      <Route exact path={routes.HOME} component={HomePage} />
    </div>
  </Router>

export default withAuthentication(App);
