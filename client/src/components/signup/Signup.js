import React, { Component } from 'react';
import axios from 'axios';
import Input from '../input/Input';
import Button from '../button/Button';

export default class signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    password_error: '',
    error: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const {
      username,
      email,
      password,
      confirm_password,
      password_error
    } = this.state;
    if (!username || username.length < 3) {
      return this.setState({
        error: 'username must be at least 3 characters long'
      });
    }
    if (password !== confirm_password) {
      return this.setState({
        password_error: 'passwords do not match'
      });
    }

    try {
      const response = await axios.post(
        'https://lambda-mud-test.herokuapp.com/api/registration/',
        {
          username,
          email,
          password1: password,
          password2: confirm_password
        }
      );
      console.log(response);
      this.setState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        password_error: '',
        error: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const {
      username,
      email,
      password,
      confirm_password,
      error,
      password_error
    } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Create a New Account</h2>
          <div className='input-field'>
            <Input
              type='text'
              name='username'
              value={username}
              handleChange={this.handleChange}
            />
            {error && <p> {error} </p>}
            <Input
              type='email'
              name='email'
              value={email}
              handleChange={this.handleChange}
            />
            <Input
              type='password'
              name='password'
              value={password}
              handleChange={this.handleChange}
            />
            <Input
              type='password'
              name='confirm_password'
              value={confirm_password}
              handleChange={this.handleChange}
            />
            {password_error && <p> {password_error} </p>}
          </div>
          <Button>signup</Button>
        </form>
      </div>
    );
  }
}
