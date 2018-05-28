import React from 'react';
import { Route } from 'react-router-dom';
import MainStyles from './Main.scss';
import Home from '../Home';
import Account from '../Account';
import Search from '../Search';
import Promo from '../Promo';
import Bookings from '../Bookings';

export default class Main extends React.Component {
  render() {
    return (
      <div className={MainStyles.homeWrapper}>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/promo" component={Promo} />
        <Route path="/bookings" component={Bookings} />
        <Route path="/account" component={Account} />
      </div>
    );
  }
}
