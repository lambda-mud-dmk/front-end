import React, { Component } from 'react';
import axios from 'axios';
import Input from '../input/Input';
import Button from '../button/Button';

export default class signup extends Component {
    state = {
        username: '',
        password: '',
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
            password,
        } = this.state;
        if (!username || username.length < 3) {
            return this.setState({
                error: 'username must be at least 3 characters long'
            });
        }

        try {
            const response = await axios.post(
                'https://lambda-mud-test.herokuapp.com/api/login/',
                {
                    username,
                    password
                }
            );
            console.log(response);
            this.setState({
                username: '',
                email: '',
                password: '',
                error: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        const {
            username,
            password,
            error,
        } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Login Here</h2>
                    <div className='input-field'>
                        <Input
                            type='text'
                            name='username'
                            value={username}
                            handleChange={this.handleChange}
                        />
                        {error && <p> {error} </p>}
                        <Input
                            type='password'
                            name='password'
                            value={password}
                            handleChange={this.handleChange}
                        />
                    </div>
                    <Button>Login</Button>
                </form>
            </div>
        );
    }
}
