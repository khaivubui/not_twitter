import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () =>
<Switch>
  <Route exact path="/" component={() => <h1>HOME</h1>}/>
  <Route path="/login" component={() => <h1>LOGIN</h1>}/>
  <Route path="/signup" component={() => <h1>SIGNUP</h1>}/>
</Switch>;

export default App;
