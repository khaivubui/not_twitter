import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './general/home';

const App = () =>
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/login" component={() => <h1>LOGIN</h1>}/>
  <Route path="/signup" component={() => <h1>SIGNUP</h1>}/>
</Switch>;

export default App;
