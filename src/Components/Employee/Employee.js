import React, { Component } from 'react';
import './Employee.css'
class Employee extends Component {
    state = {
        employees: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://localhost:8000/api/employees');
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
                    <h1>Employee Name: {item.full_name}</h1>
                </div>
            )
        })
        return (
            <div className='employee-container'>
                {employees}
                <h2>Hello from employees component</h2>
            </div>
        );
    }
}

export default Employee;