import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Input from "../input/Input";
import Button from "../button/Button";

export default class signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    password_error: "",
    error: ""
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
        error: "username must be at least 3 characters long"
      });
    }
    if (password !== confirm_password) {
      return this.setState({
        password_error: "passwords do not match"
      });
    }

    try {
      const response = await axios.post(
        "https://lambda-mud-test.herokuapp.com/api/registration/",
        {
          username,
          email,
          password1: password,
          password2: confirm_password
        }
      );
      console.log(response);
      this.setState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        password_error: "",
        error: ""
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
      <Div>
        <Form onSubmit={this.handleSubmit}>
          <InnerDiv>
            <h2>Create a New Account</h2>
            <InputField>
              <Input
                type="text"
                name="username"
                value={username}
                placeholder= 'username'
                handleChange={this.handleChange}
              />
              {error && <p> {error} </p>}
              <Input
                type="email"
                name="email"
                value={email}
                placeholder = 'email'
                handleChange={this.handleChange}
              />
              <Input
                type="password"
                name="password"
                placeholder = 'password'
                value={password}
                handleChange={this.handleChange}
              />
              <Input
                type="password"
                name="confirm_password"
                placeholder = 'confirm password'
                value={confirm_password}
                handleChange={this.handleChange}
              />
              {password_error && <p> {password_error} </p>}
            </InputField>
            <Button>Sign Up</Button>
          </InnerDiv>
        </Form>
      </Div>
    );
  }
}

const Div = styled.div`
  background: url("/controller.jpg");
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
    margin-bottom: 20px;
    font-size: 32px
  }
`;
const InputField = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
    height: 40px;
    margin-bottom: 24px;
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
