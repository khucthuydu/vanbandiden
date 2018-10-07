import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ConfigureStore from 'store/configureStore';
import { Routes } from './';

import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Provider store={ConfigureStore}>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
