import React, { Component } from 'react';
import axios from 'axios'

class ShiftSchedUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shifts: {},
            employees: []
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        axios.all([
            // axios.get('http://localhost:8000/api/employees'),
            // axios.get('http://localhost:8000/api/schedulebyshift/' + this.props.match.params.id)
            axios.get('https://scheduler-be-1.herokuapp.com/api/employees'),
            axios.get('https://scheduler-be-1.herokuapp.com/api/schedulebyshift/' + this.props.match.params.id)
        ])
        .then(axios.spread((empRes, schedRes) => {
            this.setState({
                employees: empRes.data,
                shifts: schedRes.data
            })
          }))
        .catch((err) => {
            console.log(err)
        })
    }

    onChange = (e) => {
        const state = this.state.shifts
        state[e.target.name] = e.target.value;
        this.setState({ shifts: state });

    }

    onSubmit = (e) => {
        console.log("update submitting")
        e.preventDefault();
        const { date, shift, num_of_sections, section_red, section_orange, section_yellow, section_green, section_blue, section_purple} = this.state.shifts
        // put request throwing 403 - forbidden
        axios.put('http://localhost:8000/api/schedulebyshift/' + this.props.match.params.id, { date, shift, num_of_sections, section_red, section_orange, section_yellow, section_green, section_blue, section_purple})
            .then((res) => {
                console.log(res)
                this.props.history.push('/shiftschedule/' + this.props.match.params.id)
            });
    }

    render() {
        const { date, shift, num_of_sections, section_red, section_orange, section_yellow, section_green, section_blue, section_purple} = this.state.shifts
        return (
            <form onSubmit={this.onSubmit}>
            <h2>Update Shift:</h2>
            <label>Date:</label>
            <input
              type="Date"
              name="date"
              value={date}
              onChange={this.onChange}
            />
            <br />
            <label>Shift:</label>
            <select name="shift" value={shift} onChange={this.onChange}>
              <option name="shift" value='AM'>Morning Shift</option>
              <option name="shift" value='AFT'>Afternoon Shift</option>
              <option name="shift" value="PM">Evening Shift</option>
            </select>
            <br />
            <label>Number of sections open:</label>
            <input
              type="number"
              name="num_of_sections"
              value={num_of_sections}
              onChange={this.onChange}
            />
            <label>Employee Assigned to RED Section:</label>
            <select name="section_red" value={section_red} onChange={this.onChange}>
              {this.state.employees.map(cv =>
                <option key={cv.id} value={cv.id}>{cv.full_name}</option>
              )}
            </select>
            <br />
            <label>Employee Assigned to ORANGE Section:</label>
            <select name="section_orange" value={section_orange} onChange={this.onChange}>
              {this.state.employees.map(cv =>
                <option key={cv.id} value={cv.id}>{cv.full_name}</option>
              )}
            </select>
            <br />
            <label>Employee Assigned to YELLOW Section:</label>
            <select name="section_yellow" value={section_yellow} onChange={this.onChange}>
              {this.state.employees.map(cv =>
                <option key={cv.id} value={cv.id}>{cv.full_name}</option>
              )}
            </select>
            <br />
            <label>Employee Assigned to GREEN Section:</label>
            <select name="section_green" value={section_green} onChange={this.onChange}>
              {this.state.employees.map(cv =>
                <option key={cv.id} value={cv.id}>{cv.full_name}</option>
              )}
            </select>
            <br />
            <label>Employee Assigned to BLUE Section:</label>
            <select name="section_blue" value={section_blue} onChange={this.onChange}>
              {this.state.employees.map(cv =>
                <option key={cv.id} value={cv.id}>{cv.full_name}</option>
              )}
            </select>
            <br />
            <label>Employee Assigned to PURPLE Section:</label>
            <select name="section_purple" value={section_purple} onChange={this.onChange}>
              {this.state.employees.map(cv =>
                <option key={cv.id} value={cv.id}>{cv.full_name}</option>
              )}
            </select>
            <br />
            <button type="submit">Submit</button>
          </form>
        );
    }
}

export default ShiftSchedUpdate;