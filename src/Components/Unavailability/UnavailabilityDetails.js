import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

class UnavailabilityDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unavailability: {}
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        axios.get('https://scheduler-be-1.herokuapp.com/api/unavailability/' + this.props.match.params.id)
            .then((res) => {
                this.setState({
                    unavailability: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleDelete = e => {
        e.preventDefault();
        // throwing 403 - forbidden
        axios.delete('https://scheduler-be-1.herokuapp.com/api/unavailability/' + this.props.match.params.id)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    unavailability: {}
                });
                this.props.history.push("/unavailabilitys");
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        console.log('inside unavailability details render')
        const { date, am, aft, pm } = this.state.unavailability
        return (
            <div key={this.state.unavailability.id}>
                <h1>Date: {date}</h1>
                <p>Morning Availability: {am}</p>
                <p>Afternoon Availability: {aft}</p>
                <p>Evening Availability: {pm}</p>

                <Link to={`/unavailability/edit/${this.state.unavailability.id}`}>
                    <button value="update" type="update">
                        Update
                </button>
                </Link>

                <button value="delete" type="submit" onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

export default UnavailabilityDetail;