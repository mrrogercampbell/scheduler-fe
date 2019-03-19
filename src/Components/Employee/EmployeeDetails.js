import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

class EmployeeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {}
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        axios.get('https://scheduler-be-1.herokuapp.com/api/employee/' + this.props.match.params.id)
            .then((res) => {
                this.setState({
                    employee: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleDelete = e => {
        e.preventDefault();
        // throwing 403 - forbidden
        axios.delete('https://scheduler-be-1.herokuapp.com/api/employee/' + this.props.match.params.id)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    employee: {}
                });
                this.props.history.push("/employees");
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        console.log('inside employee details render')
        const { full_name, position, photo_url, sales, rating } = this.state.employee
        return (
            <div key={this.state.employee.id}>
                <h1>Name: {full_name}</h1>
                <h2>Position: {position}</h2>
                <img src={photo_url} alt={full_name} />
                <p>Sales: {sales}</p>
                <p>Rating: {rating}</p>

                <Link to={`/employee/edit/${this.state.employee.id}`}>
                    <button value="update" type="update">
                        Update
                </button>
                </Link>

                <button value="delete" type="submit" onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

export default EmployeeDetails;