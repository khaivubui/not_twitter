import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './general/nav';

const App = () =>
<main>
  <Nav/>
  <Switch>
    <Route path="/login" component={() => <h1>LOGIN</h1>}/>
    <Route path="/signup" component={() => <h1>SIGNUP</h1>}/>
  </Switch>
</main>;

export default App;
