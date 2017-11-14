import React from 'react';

export default class Login extends React.Component {
  render () {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate"/>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate"/>
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="username" type="text" className="validate"/>
              <label htmlFor="username">Username</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
