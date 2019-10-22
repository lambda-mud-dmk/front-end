import React, { Component } from 'react'
import Input from '../input/Input'
import PropTypes from 'prop-types'

export default class signup extends Component {
    state = {
        username: '',
        password: '',
        email: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target 
        this.setState({
          [ name ] : value
        })
    }

    render() {
        const { username, password, email } = this.state
        return (
          <div>
            <form>
              <h2>Create a New Account</h2>
              <div className="input-field">
                <Input
                  type="text"
                  name="username"
                  value={username}
                  handleChange={this.handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  value={email}
                  handleChange={this.handleChange}
                />
                <Input
                  type="password"
                  name="password"
                  value={password}
                  handleChange={this.handleChange}
                />
              </div>
            </form>
          </div>
        );
    }
}
