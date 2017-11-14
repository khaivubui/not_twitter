import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './general/nav';

import Login from './auth/login.jsx';
import Register from './auth/register.jsx';

const App = () =>
<main>
  <Nav/>
  <Switch>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
  </Switch>
</main>;

export default App;
