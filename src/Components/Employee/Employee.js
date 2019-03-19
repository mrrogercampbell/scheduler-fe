import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Employee.css'
import { API_URL } from '../../config/const'
class Employee extends Component {
    state = {
        employees: []
    };

    async componentDidMount() {
        try {
            const res = await fetch(API_URL + '/employees');
            const employees = await res.json();
            this.setState({
                employees
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const employees = this.state.employees.map(item => {
            return (
                <div key={item.id}>
                    <Link to={'employee/' + item.id}> <h1>Employee Name: {item.full_name}</h1></Link>
                    <p>Position: {item.position}</p>
                    <p>Photo: <img src={item.photo_url} alt={item.full_name}></img></p>
                </div>
            )
        })
        return (
            <div className='employee-container'>
                <h2>Hello from employees component</h2>
                {employees}
                <Link to="/employee/new">
                    <h3 className="nav-link active">Add Employee</h3>
                </Link>
            </div>
        );
    }
}

export default Employee;