import React, { Component } from 'react';
import axios from 'axios'

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
        console.log('http://localhost:8000/api/unavailability/' + this.props.match.params.id)
        axios.get('http://localhost:8000/api/unavailability/' + this.props.match.params.id)
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
        const { am, aft, pm, date } = this.state.unavailability
        // put request throwing 403 - forbidden
        axios.put('http://localhost:8000/api/unavailability/' + this.props.match.params.id, { am, aft, pm, date })
            .then((res) => {
                console.log(res)
                this.props.history.push('/unavailability/' + this.props.match.params.id)
            });

    }
    //Having a issue submitting Unavailability Update.
    //need to pin point what the error is
    //Then need to look aat why some 

    //error:A component is changing an uncontrolled input of type date to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components
    // in input(at UnavailabilityUpdate.js: 54)
    // in form(at UnavailabilityUpdate.js: 51)
    // in UnavailabilityUpdate(at App.js: 104)

    //Also having issue with EmployeeUpdate Component drop down menu, it will not store the new selection
    //Might be an issue with the code base or a component life cycle issue.
    render() {
        const { am, aft, pm, date } = this.state.unavailability
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Edit Unavailability Details</h3>
                <label>Date:</label>
                <input type='date' name='date' value={date} onChange={this.onChange}></input>
                <br />
                <label>Morning Unavailability:</label>
                <input
                    type="text"
                    name="am"
                    value={am}
                    onChange={this.onChange}
                />
                <br />
                <label>Afternoon Unavailability:</label>
                <input
                    type="text"
                    name="aft"
                    value={aft}
                    onChange={this.onChange}
                />
                <br />
                <label>Evening Unavailability:</label>
                <input
                    type="text"
                    name="pm"
                    value={pm}
                    onChange={this.onChange}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default UnavailabilityUpdate;