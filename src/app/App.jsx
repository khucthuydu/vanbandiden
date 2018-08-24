import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ConfigureStore from 'store/configureStore';
import RouterMain from './RouterMain';
import { BrowserRouter } from 'react-router-dom';

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import indigoTheme from 'containers/themes/indigoTheme';

class App extends Component {
  
  render() {
    let applyTheme = createMuiTheme(indigoTheme);

    return (
      <Provider store={ConfigureStore}>
        <BrowserRouter>
          <MuiThemeProvider theme={applyTheme}>
            <div className="app-main">
              <RouterMain/>
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
