import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ConfigureStore from 'store/configureStore';
import { AuthRouter } from './';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <Provider store={ConfigureStore}>
        <BrowserRouter>
          <AuthRouter/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
