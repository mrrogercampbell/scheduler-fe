import React, { Component } from 'react';
import axios from 'axios'

class ShiftSchedCreate extends Component {
    constructor() {
        super();
        this.state = {
        date: '',
        shift: '',
        num_of_sections: '',
        section_red: 1,
        section_orange: 1,
        section_yellow: 1,
        section_green: 1,
        section_blue: 1,
        section_purple: 1,
        employees: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
      // axios.get('http://localhost:8000/api/employees').then(
      axios.get('https://scheduler-be-1.herokuapp.com/api/employees').then(
        (response) => {
        this.setState({
          employees: response.data
        })
      })
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
      };

    onSubmit = e => {
        e.preventDefault()
        // axios.post("http://localhost:8000/api/schedulebyshifts", this.state).then(result => {
        axios.post("https://scheduler-be-1.herokuapp.com/api/schedulebyshifts", this.state).then(result => {
            console.log(result);
            this.props.history.push("/shiftschedules");
        });
    };

    render() {
        const { date, shift, num_of_sections, section_red, section_orange, section_yellow, section_green, section_blue, section_purple } = this.state;
        let employees = this.state.employees
        console.log(this.state.employees)
        return (
          <form onSubmit={this.onSubmit}>
            <h2>Schedule A Shift:</h2>
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
              {employees.map(cv =>
                <option key={cv.id} value={cv.id}>{cv.full_name}</option>
              )}
            </select>
            <br />
            <label>Employee Assigned to ORANGE Section:</label>
            <select name="section_orange" value={section_orange} onChange={this.onChange}>
              {employees.map(cv =>
                <option key={cv.id} value={cv.id}>{cv.full_name}</option>
              )}
            </select>
            <br />
            <label>Employee Assigned to YELLOW Section:</label>
            <select name="section_yellow" value={section_yellow} onChange={this.onChange}>
              {employees.map(cv =>
                <option key={cv.id} value={cv.id}>{cv.full_name}</option>
              )}
            </select>
            <br />
            <label>Employee Assigned to GREEN Section:</label>
            <select name="section_green" value={section_green} onChange={this.onChange}>
              {employees.map(cv =>
                <option key={cv.id} value={cv.id}>{cv.full_name}</option>
              )}
            </select>
            <br />
            <label>Employee Assigned to BLUE Section:</label>
            <select name="section_blue" value={section_blue} onChange={this.onChange}>
              {employees.map(cv =>
                <option key={cv.id} value={cv.id}>{cv.full_name}</option>
              )}
            </select>
            <br />
            <label>Employee Assigned to PURPLE Section:</label>
            <select name="section_purple" value={section_purple} onChange={this.onChange}>
              {employees.map(cv =>
                <option key={cv.id} value={cv.id}>{cv.full_name}</option>
              )}
            </select>
            <br />
            <button type="submit">Submit</button>
          </form>
        );
    }
}

export default ShiftSchedCreate;

