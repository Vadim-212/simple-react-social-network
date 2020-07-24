import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { default as App } from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { app } from './model/reducer';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(app, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
