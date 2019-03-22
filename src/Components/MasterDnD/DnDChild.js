import React from 'react';
import styled, { css } from 'styled-components';
import './MasterDnD.css'
import image from '../../Images/dinner-plate.png'
// import { Link } from "react-router-dom";
import axios from 'axios'

export default class Draggable extends React.Component {
    state = {
        employees: []
    };

    componentDidMount() {
        axios.get('https://scheduler-be-1.herokuapp.com/api/employees').then(
            (response) => {
                this.setState({
                    employees: response.data
                })
            })
    }
    render() {
        let employee = this.state.employees.map(item => {
            return (
                <div key={item.id}>
                    <p>Photo: <img src={item.photo_url} alt={item.full_name}></img></p>
                </div>
            )
        })
        return (
            <div>
                {employee}
            </div>
        );
    }
}