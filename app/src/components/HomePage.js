import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends PureComponent {
  render() {
    return (<div>
      homepage
      <Link to="/">landingpage</Link>
    </div>);
  }
}
