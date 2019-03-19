import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";

class UnavailabilityCreate extends Component {
    constructor() {
        super();
        this.state = {
            am: "",
            aft: "",
            pm: "",
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
        console.log("Unavailability request has been created");

        axios.post("http://localhost:8000/api/unavailability", this.state).then(result => {
            console.log(result)
            this.props.history.push("/unavailability");
        });
    };

    render() {
        const { am, aft, pm } = this.state;
        return (
            <div className='unavailability-create-form'>
                <h1>Unavailability Request Form:</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Morning Availability:</label>
                    <input
                        type="text"
                        name="am"
                        value={am}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Afternoon Availability: </label>
                    <input
                        type="text"
                        name="aft"
                        value={aft}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Evening Availability:</label>
                    <input
                        type="text"
                        name="pm"
                        value={pm}
                        onChange={this.onChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                <Link to="/unavailability">
                    <h3 className="nav-link active">View Time Off Requests</h3>
                </Link>
            </div>
        );
    }
}

export default UnavailabilityCreate;