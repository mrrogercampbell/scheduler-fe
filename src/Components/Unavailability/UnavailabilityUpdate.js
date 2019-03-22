import React, { Component } from 'react';
import axios from 'axios'
import { API_URL } from '../../config/const'

class UnavailabilityUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unavailability: {}
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount() {
        axios.get(API_URL + '/unavailability/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    unavailability: res.data
                })
                console.log(this.state.unavailability)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    onChange = (e) => {
        const state = this.state.unavailability
        state[e.target.name] = e.target.value;
        this.setState({ unavailability: state });
    }

    onSubmit = (e) => {
        console.log("update submitting")
        e.preventDefault();
        const { employee, date, am, aft, pm } = this.state.unavailability
        axios.put(API_URL + '/unavailability/' + this.props.match.params.id, { employee, date, am, aft, pm })
            .then((res) => {
                console.log(res)
                this.props.history.push('/unavailability/' + this.props.match.params.id)
            });

    }
    render() {
        const { employee, date, am, aft, pm } = this.state.unavailability
        return (
            <div className='componentStyle'>
                <h1 className='headerStyle'>Edit Time Off Request:</h1>
                <form className='itemStyle'onSubmit={this.onSubmit}>

                    <label>Team Member:</label>
                    <select name="employee" value=       {employee} onChange={this.onChange}>
                        {employees.map(cv =>
                            <option key={cv.id} value={cv.id}>{cv.full_name}</option>
                        )}
                    </select>
                    <br />

                    <label>Date:</label>
                    <input
                        type="Date"
                        name="date"
                        value={date}
                        onChange={this.onChange}
                    />
                    <br />

                    <label>Morning Availability:</label>
                    <select name="am" value={am} onChange={this.onChange}>
                        <option name='am' value='available'>I AM available</option>
                        <option name='am' value='unavailable'>I am NOT available</option>
                    </select>
                    <br />

                    <label>Afternoon Availability:</label>
                    <select name="aft" value={aft} onChange={this.onChange}>
                        <option name='aft' value='available'>I AM available</option>
                        <option name='aft' value='unavailable'>I am NOT available</option>
                    </select>
                    <br />

                    <label>Evening Availability:</label>
                    <select name="pm" value={pm} onChange={this.onChange}>
                        <option name='pm' value='available'>I AM available</option>
                        <option name='aft' value='unavailable'>I am NOT available</option>
                    </select>
                    <br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default UnavailabilityUpdate;