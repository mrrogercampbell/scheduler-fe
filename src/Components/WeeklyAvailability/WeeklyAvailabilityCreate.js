import React, { Component } from 'react';
import axios from 'axios'

class WeeklyAvailabilityCreate extends Component {
    constructor() {
        super();
        this.state = {
            mon_am: "",
            tue_am: "",
            wed_am: "",
            thu_am: "",
            fri_am: "",
            sat_am: "",
            sun_am: "",
            mon_aft: "",
            tue_aft: "",
            wed_aft: "",
            thu_aft: "",
            fri_aft: "",
            sat_aft: "",
            sun_aft: "",
            mon_pm: "",
            tue_pm: "",
            wed_pm: "",
            thu_pm: "",
            fri_pm: "",
            sat_pm: "",
            sun_pm: "",
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    };

    onSubmit = e => {
        e.preventDefault();
        console.log("Weekly Availability Form has been created");

        axios.post("http://localhost:8000/api/weeklyavailabilitycreate", this.state).then(result => {
            console.log(result)
            this.props.history.push("/weeklyavailabilitycreate");
        });
    };

    render() {
        const { mon_am, tue_am, wed_am, thu_am, fri_am, sat_am, sun_am, mon_aft, tue_aft, wed_aft, thu_aft, fri_aft, sat_aft, sun_aft, mon_pm, tue_pm, wed_pm, thu_pm, fri_pm, sat_pm, sun_pm, } = this.state;
        return (
            <div className='weekly-availability-create-form'>
                <h1>Unavailability Request Form:</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Monday Morning Availability:</label>
                    <input
                        type="text"
                        name="mon_am"
                        value={mon_am}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Tuesday Morning Availability:</label>
                    <input
                        type="text"
                        name="tue_am"
                        value={tue_am}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Wednesday Morning Availability:</label>
                    <input
                        type="text"
                        name="wed_am"
                        value={wed_am}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Thursday Morning Availability:</label>
                    <input
                        type="text"
                        name="thu_am"
                        value={thu_am}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Friday Morning Availability:</label>
                    <input
                        type="text"
                        name="fri_am"
                        value={fri_am}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Saturday Morning Availability:</label>
                    <input
                        type="text"
                        name="sat_am"
                        value={sat_am}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Sunday Morning Availability:</label>
                    <input
                        type="text"
                        name="sun_am"
                        value={sun_am}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Monday Afternoon Availability: </label>
                    <input
                        type="text"
                        name="mon_aft"
                        value={mon_aft}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Tuesday Afternoon Availability: </label>
                    <input
                        type="text"
                        name="tue_aft"
                        value={tue_aft}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Wednesday Afternoon Availability: </label>
                    <input
                        type="text"
                        name="wed_aft"
                        value={wed_aft}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Thursday Afternoon Availability: </label>
                    <input
                        type="text"
                        name="thu_aft"
                        value={thu_aft}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Friday Afternoon Availability: </label>
                    <input
                        type="text"
                        name="fri_aft"
                        value={fri_aft}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Saturday Afternoon Availability: </label>
                    <input
                        type="text"
                        name="sat_aft"
                        value={sat_aft}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Sunday Afternoon Availability: </label>
                    <input
                        type="text"
                        name="sun_aft"
                        value={sun_aft}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Monday Evening Availability:</label>
                    <input
                        type="text"
                        name="mon_pm"
                        value={mon_pm}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Tuesday Evening Availability:</label>
                    <input
                        type="text"
                        name="tue_pm"
                        value={tue_pm}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Wednesday Evening Availability:</label>
                    <input
                        type="text"
                        name="wed_pm"
                        value={wed_pm}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Thursday Evening Availability:</label>
                    <input
                        type="text"
                        name="thu_pm"
                        value={thu_pm}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Friday Evening Availability:</label>
                    <input
                        type="text"
                        name="fri_pm"
                        value={fri_pm}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Saturday Evening Availability:</label>
                    <input
                        type="text"
                        name="sat_pm"
                        value={sat_pm}
                        onChange={this.onChange}
                    />
                    <br />
                    <label>Sunday Evening Availability:</label>
                    <input
                        type="text"
                        name="sun_pm"
                        value={sun_pm}
                        onChange={this.onChange}
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default WeeklyAvailabilityCreate;