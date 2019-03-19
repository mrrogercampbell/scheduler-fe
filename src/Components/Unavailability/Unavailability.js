import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import { API_URL } from '../../config/const'


class Unavailability extends Component {
    state = {
        unavailability: [],
    };

    componentDidMount() {
        axios.get(API_URL + '/unavailability')
            .then((item) => {
                console.log(item)
                this.setState({ unavailability: item.data, })
            })
    }

    render() {
        const unavailability = this.state.unavailability.map(item => {
            return (
                <div key={item.id}>
                    <Link to={'/unavailability/' + item.id}><p>Date: {item.date}</p></Link>
                    <p>Employee Number: {item.employee}</p>
                    <ul>
                        <li>Morning: {item.am}</li>
                        <li>Afternoon: {item.aft}</li>
                        <li>Evening: {item.pm}</li>
                    </ul>
                </div>
            )
        })
        return (

            <div className='unavailability-container'>
                <h2>Hello from Unavailability Component</h2>
                {unavailability}
            </div>
        );
    }
}

export default Unavailability;