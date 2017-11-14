import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
  render () {
    return (
      <nav className="nav-wrapper">
        <Link to='/' className="left brand-logo">Not-Twitter</Link>
        <ul className="right">
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
        </ul>
      </nav>
    );
  }
}


export default Nav;
