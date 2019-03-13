import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", this.state).then(result => {
            console.log(result)
            this.props.history.push("/login");
        });
    };

    render() {
        const { username, password } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                />
                <br />
                <label>Password: </label>
                <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Login;