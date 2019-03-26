import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Employee.css'
import { API_URL } from '../../config/const'

const styles = {
    textDecoration: 'none'
}

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
                <div className='itemStyle' key={item.id}>
                    <img className='photoStyle' src={item.photo_url} alt={item.full_name}></img>
                    <h2>Name: <Link className='linkStyle' style={styles} to={'employee/' + item.id}>{item.full_name}</Link></h2>
                    <h4>Position: {item.position}</h4>
                </div>
            )
        })
        return (
            <div className='componentStyle'>
                <h2 className='headerStyle'>ROSTER <Link className='linkStyle' style={styles} to="/employee/new">+</Link></h2>
                {employees}
            </div>
        );
    }
}

export default Employee;