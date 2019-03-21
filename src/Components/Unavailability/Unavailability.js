import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import { API_URL } from '../../config/const'

const styles = {
    textDecoration: 'none'
}

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
                <div className='itemStyle' key={item.id}>
                    <Link className='linkStyle' style={styles} to={'/unavailability/' + item.id}><p>Date: {item.date}</p></Link>
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

            <div className='componentStyle'>
                <h2 className='headerStyle'>Time Off Requests</h2>
                {unavailability}
            </div>
        );
    }
}

export default Unavailability;