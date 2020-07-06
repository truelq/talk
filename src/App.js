import React from 'react';
import ReactDOM from 'react-dom';
//https://reactrouter.com/web/api route
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import {Loginpage} from './login/index';
import futurepage from './future/index';
function App() {
  return (
    <Router>
        <Route exact path="/" component={Loginpage} />
        <Route path="/future" component={futurepage} />
    </Router>
  );
}

export default App;
