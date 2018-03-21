import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import {BrowserRouter} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './app.scss';
import './assets/images/favicon.ico';

import App from './components/App.jsx';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render((
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <MuiThemeProvider><App/></MuiThemeProvider>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));
