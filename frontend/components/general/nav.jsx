import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

export const GET_USER = 'GET_USER';

class Nav extends React.Component {
  componentWillMount () {
    this.props.getUser();
  }

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

const getUserActionCreator = _ => {
  const request = axios.get(
    'https://sts-code-challenge.herokuapp.com/api/user'
  );

  return {
    type: GET_USER,
    payload: request
  };
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getUser: _ => dispatch(getUserActionCreator())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
