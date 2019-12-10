import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';

import Routes from './Routes';
import { store } from './Store';

import "./App.scss";
import logoSpotify from './assets/img/logo-spotify.png';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Helmet>
          <title>Test XP Jonatas</title>
        </Helmet>
        <div className="App">
          <img src={logoSpotify} className="main-logo" alt="Logo" />
          <div className="wrapper">
            <Routes />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
