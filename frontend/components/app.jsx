import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './general/nav';

import Login from './auth/login.jsx';

const App = () =>
<main>
  <Nav/>
  <Switch>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={() => <h1>SIGNUP</h1>}/>
  </Switch>
</main>;

export default App;
