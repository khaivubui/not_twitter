import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>
<div>
  <Link to='/login' className="cyan lighten-1 btn">Login</Link>
  <Link to='/register' className="cyan lighten-1 btn">Register</Link>
</div>;

export default Nav;
