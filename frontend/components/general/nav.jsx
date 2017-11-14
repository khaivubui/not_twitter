import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';

export const GET_USER = 'GET_USER';
export const LOGOUT = 'LOGOUT';

class Nav extends React.Component {
  componentWillMount () {
    this.props.getUser();
  }

  logOut () {
    Cookies.set('Authorization', '');
    this.props.logOut();
  }

  render () {
    const {currentUser} = this.props;
    return (
      <nav className="nav-wrapper">
        <Link to='/' className="left brand-logo">Not-Twitter</Link>
        <ul className="right">
          <li hidden={currentUser ? false : true}>
            Welcome back, {currentUser && currentUser.username}
          </li>
          <li hidden={currentUser ? false : true}>
            <a onClick={_ => this.logOut()}>Log Out</a>
          </li>
          <li hidden={currentUser ? true : false}><Link to='/login'>Log In</Link></li>
          <li hidden={currentUser ? true : false}><Link to='/register'>Register</Link></li>
        </ul>
      </nav>
    );
  }
}

const getUserActionCreator = _ => {
  const request = axios({
    url: 'https://sts-code-challenge.herokuapp.com/api/user',
    headers: { Authorization: Cookies.get('Authorization') }
  });

  return {
    type: GET_USER,
    payload: request
  };
};

const logOutActionCreator = _ => ({type: LOGOUT});

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getUser: _ => dispatch(getUserActionCreator()),
  logOut: _ => dispatch(logOutActionCreator())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
