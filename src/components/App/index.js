import React from 'react';
import AppStyles from './App.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className={AppStyles.container}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
