import React from 'react'; 
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'; 
import routes from './routes';
import { createStore, applyMiddleware, compose } from 'redux'; 
import { Provider } from 'react-redux'; 
import reducers from './reducers/index';
import promise from 'redux-promise';

const createStoreWithMiddleware = compose(
  applyMiddleware(promise)
)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)