import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Employee.css'
// import * as Constants from './constants'
// import './Employee.css'
class Employee extends Component {
    state = {
        employees: []
    };

    async componentDidMount() {
        try {
            // const res = await fetch('http://localhost:8000/api/employees');
            
            const res = await fetch('https://scheduler-be-1.herokuapp.com/api/employees');
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
                    <Link to={'employee/' + item.id}> <h1>Name: {item.full_name}</h1></Link>
                    <h2>Position: {item.position}</h2>
                    <h2>Photo: <img src={item.photo_url} alt={item.full_name}></img></h2>
                </div>
            )
        })
        return (
            <div className='employee-container'>
            <h1>Employee Roster</h1>
                {employees}
                <Link to="/employee/new">
                    <h3 className="nav-link active">Add Employee</h3>
                </Link>
            </div>
        );
    }
}

export default Employee;