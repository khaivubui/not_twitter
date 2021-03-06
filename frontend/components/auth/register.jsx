import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

export const REGISTER = 'REGISTER';

class Register extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: ''
    };
  }

  update (e, fieldType) {
    this.setState({
      [fieldType]: e.target.value
    });
  }

  register (e) {
    e.preventDefault();
    this.props.register({user: this.state});
  }

  render () {
    return (
      <div className="row">
        <form className="col s12" onSubmit={e => this.register(e)}>
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
            <div className="input-field col s12">
              <input id="username"
                     type="text"
                     className="validate"
                     value={this.state.username}
                     onChange={e => this.update(e, 'username')}/>
              <label htmlFor="username" className="active">
                Username
              </label>
            </div>
          </div>
          <div className="row">
            <input type="submit"
                   className="waves-effect waves-light btn"
                   value="Register New Account"/>
          </div>
        </form>
      </div>
    );
  }
}

const registerActionCreator = formData => {
  const request = axios.post(
    'https://sts-code-challenge.herokuapp.com/api/users',
    formData
  );

  return {
    type: REGISTER,
    payload: request
  };
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  register: formData => dispatch(registerActionCreator(formData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
