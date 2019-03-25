import React from 'react';
import  thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import App from './layouts';
import * as serviceWorker from './serviceWorker';
import reducers from "./reducers";
import './styles/index.scss';

export const history = createBrowserHistory();

const store = createStore(reducers, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
