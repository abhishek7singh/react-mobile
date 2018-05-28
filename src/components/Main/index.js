import React from 'react';
import { Route } from 'react-router-dom';
import MainStyles from './Main.scss';
import Home from '../Home';
import Loadable from 'react-loadable';
import Loading from '../Loading';

export default class Main extends React.Component {
  render() {
    return (
      <div className={MainStyles.homeWrapper}>
        <Route exact path="/" component={Home} />
        <Route
          path="/search"
          component={Loadable({
            loader: () => import('../Search'),
            loading: Loading
          })}
        />
        <Route
          path="/promo"
          component={Loadable({
            loader: () => import('../Promo'),
            loading: Loading
          })}
        />
        <Route
          path="/bookings"
          component={Loadable({
            loader: () => import('../Bookings'),
            loading: Loading
          })}
        />
        <Route
          path="/account"
          component={Loadable({
            loader: () => import('../Account'),
            loading: Loading
          })}
        />
      </div>
    );
  }
}
