import React from 'react';

export default class Login extends React.Component {
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

  render () {
    return (
      <div className="row">
        <form className="col s12">
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
