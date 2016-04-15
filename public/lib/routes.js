import React from 'react'; 
import { Route, IndexRoute } from 'react-router'; 
import MainPage from './components/main/index'; 

export default (
  <div>
    <Route path="/" component={ MainPage }>
    </Route>
  </div>
);