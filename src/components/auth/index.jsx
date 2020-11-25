import React from 'react';
import uuid from 'uuid/dist/v4';
import { SIGN_UP } from '../../state/stores/UserStore';
import './auth.scss';

export class Auth extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleAuth = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    const { dispatch } = this.props;

    const user = {
      id: uuid(),
      username,
      password,
    };

    dispatch(SIGN_UP, { user });
  };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, password } = this.state;
    const valuesEntered = username && password;

    return (
      <form onSubmit={this.handleAuth} className='auth'>
        <input
          type='text'
          placeholder='Username'
          value={username}
          name='username'
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='Password'
          name='password'
          value={password}
          onChange={this.handleChange}
        />
        <div className='auth-buttons'>
          <button
            disabled={!valuesEntered}
            onClick={this.handleAuth}
            type='submit'>
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}
