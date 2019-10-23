import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Input from '../input/Input';
import Button from '../button/Button';
import { Redirect } from 'react-router-dom';

export default class signup extends Component {
  state = {
    username: '',
    password: '',
    error: '',
    shouldRedirect: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    if (!username || username.length < 3) {
      return this.setState({
        error: 'username must be at least 3 characters long'
      });
    }

    try {
      const response = await axios.post(
        'https://dmk-csbw1.herokuapp.com/api/login/',
        {
          username,
          password
        }
      );
      localStorage.setItem('key', response.data.key);
      this.setState({
        username: '',
        email: '',
        password: '',
        error: '',
        shouldRedirect: true
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { username, password, error, shouldRedirect } = this.state;
    if (!shouldRedirect) {
      return (
        <Div>
          <Form onSubmit={this.handleSubmit}>
            <InnerDiv>
              <h2>Login</h2>
              <InputField>
                <Input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={username}
                  handleChange={this.handleChange}
                />
                {error && <p> {error} </p>}
                <Input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  handleChange={this.handleChange}
                />
              </InputField>
              <Button>LOGIN</Button>
              <div>
                <p>
                  Don't have an account?{' '}
                  <a href="/registration">Create one here </a>
                </p>
              </div>
            </InnerDiv>
          </Form>
        </Div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const Div = styled.div`
  background: url('/controller.jpg');
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  width: 454px;
  height: 400px;
  border: 1px solid;
  background-color: rgba(71, 71, 71, 65%);
  margin-left: 10%;
  border-radius: 4px;
`;

const InnerDiv = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: white;
    margin-top: 20px;
    font-size: 32px;
  }
  p {
    color: #f5f5f5d1;
    font-size: 18px;
    a {
      color: #f5f5f5d1;
      text-decoration: underline;
    }
  }
`;
const InputField = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  input {
    width: 100%;
    height: 45px;
    margin-bottom: 30px;
    border-radius: 4px;
    outline: none;
    border: none;
    color: white;
    background-color: rgba(0, 0, 0, 33%);
    border: 1px solid rgba(0, 0, 0, 33%);
    padding-left: 5px;
    box-sizing: border-box;
  }
`;
