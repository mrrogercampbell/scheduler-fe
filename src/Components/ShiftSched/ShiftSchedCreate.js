import React, { Component } from 'react';
import axios from 'axios'

class ShiftSchedCreate extends Component {
    constructor() {
        super();
        this.state = {
        date: Date,
        shift: '',
        num_of_sections: 0,
        section_red: '',
        section_orange: '',
        section_yellow: '',
        section_green: '',
        section_blue: '',
        section_purple: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
      };

    onSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/schedulebyshift", this.state).then(result => {
            console.log(result);
            this.props.history.push("/schedulebyshift");
        });
    };

    render() {
        const { date, shift, num_of_sections, section_red, section_orange, section_yellow, section_green, section_blue, section_purple } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={this.onChange}
            />
            <br />
            <label>Shift:</label>
            <select value={shift} onChange={this.onChange}>
                <option name='shift' value='AM'>AM Shift</option>
                <option name='shift' value='AFT'>Afternoon Shift</option>
                <option name='shift' value='PM'>PM Shift</option>
            <br />
            <label>Number of Sections</label>
            <input
              type="number"
              name="num_of_sections"
              value={num_of_sections}
              onChange={this.onChange}
            />
            <br />
            <label>Section Red: </label>
            <select value={section_red} onChange={this.onChange}>
                <option name='section_red' value='Employee'>Manager</option>
            </select>
            <label>Logo URL:</label>
            <input
              type="text"
              name="logoURL"
              value={logoURL}
              onChange={this.onChange}
            />
            <br />
            <label>Content:</label>
            <input
              type="text"
              name="content"
              value={content}
              onChange={this.onChange}
            />
            <br />
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={this.onChange}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        );
    }
}

export default ShiftSchedCreate;