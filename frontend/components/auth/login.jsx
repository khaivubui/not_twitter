import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

export const LOGIN = 'LOGIN';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  update (e, fieldType) {
    this.setState({
      [fieldType]: e.target.value
    });
  }

  logIn (e) {
    e.preventDefault();
    this.props.logIn({user: this.state});
  }

  render () {
    return (
      <div className="row">
        <form className="col s12" onSubmit={e => this.logIn(e)}>
          <div className="row">
            <div className="input-field col s12">
              <input id="email"
                     type="email"
                     className="validate"
                     value={this.state.email}
                     onChange={e => this.update(e, 'email')}/>
              <label htmlFor="email" className="active">
                Email
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password"
                     type="password"
                     className="validate"
                     value={this.state.password}
                     onChange={e => this.update(e, 'password')}/>
              <label htmlFor="password" className="active">
                Password
              </label>
            </div>
          </div>
          <div className="row">
            <input type="submit"
                   className="waves-effect waves-light btn"
                   value="Log In"/>
          </div>
        </form>
      </div>
    );
  }
}

const logInActionCreator = formData => {
  const request = axios.post(
    'https://sts-code-challenge.herokuapp.com/api/users/login',
    formData
  );

  return {
    type: LOGIN,
    payload: request
  };
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logIn: formData => dispatch(logInActionCreator(formData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
