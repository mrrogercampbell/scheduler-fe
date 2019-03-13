import React, { Component } from 'react';
import axios from 'axios'

class EmployeeCreate extends Component {
    constructor() {
        super();
        this.state = {
            full_name: "",
            position: "",
            photo_url: "",
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    };

    onSubmit = e => {
        e.preventDefault();
        console.log("Employee has been created");

        axios.post("http://localhost:8000/api/employees", this.state).then(result => {
            console.log(result)
            this.props.history.push("/employee");
        });
    };

    render() {
        const { full_name, position, photo_url } = this.state;
        return (
            <div className='employee-create-form'>
                <h1>New Employee Form:</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        name="full_name"
                        value={full_name}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Position: </label>
                    <select value={position} onChange={this.onChange}>
                        <option name='position' value='server'>Server</option>
                        <option name='position' value='General host'>Host</option>
                        <option name='position' value=" bartender">Bartender</option>
                    </select>
                    <br />
                    <label>Photo URL:</label>
                    <input
                        type="text"
                        name="photo_url"
                        value={photo_url}
                        onChange={this.onChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default EmployeeCreate;