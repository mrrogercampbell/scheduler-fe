import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from '../../config/const'
import './Employee.css'

class EmployeeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {}
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        axios.get(API_URL + '/employee/' + this.props.match.params.id)
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
        axios.delete(API_URL + 'employee/' + this.props.match.params.id)
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
            <div className='componentStyle' key={this.state.employee.id}>
                <img className='photoStyle' src={photo_url} alt={full_name} />
                <h2>Name: {full_name}</h2>
                <h4>Position: {position}</h4>
                <p>Sales: {sales}</p>
                <p>Rating: {rating}</p>

                <Link style={{ textDecoration: 'none', color: 'rgb(227,118,105)' }} to={`/employee/edit/${this.state.employee.id}`}>
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