import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class ShiftSchedDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          shift: {}
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        console.log('http://localhost:8000/api/schedulebyshift/' + this.props.match.params.id)
        axios.get('http://localhost:8000/api/schedulebyshift/' + this.props.match.params.id)
          .then((res) => {
            this.setState({
              shift: res.data
            });
        })
          .catch(err => {
            console.log(err);
        });
    }

    handleDelete = e => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/schedulebyshift/' + this.props.match.params.id)
          .then((res) => {
            console.log(res.data)
            this.setState({
              shift: {}
            });
            this.props.history.push("/shiftschedules");
          })
          .catch(err => {
            console.log(err);
          });
      };



    render() {
        const { date, shift, num_of_sections, section_red, section_orange, section_yellow, section_green, section_blue, section_purple} = this.state.shift
        return (
            <div key={this.state.shift.id}>
                <h1>Date: {date}</h1>
                <h2>Shift: {shift}</h2>
                <h2>Number of Open Sections: {num_of_sections}</h2>
                <h2>Employee Assigned to Section Red: {section_red}</h2>
                <h2>Employee Assigned to Section Orange: {section_orange}</h2>
                <h2>Employee Assigned to Section Yellow: {section_yellow}</h2>
                <h2>Employee Assigned to Section Green: {section_green}</h2>
                <h2>Employee Assigned to Section Blue: {section_blue}</h2>
                <h2>Employee Assigned to Section Purple: {section_purple}</h2>

                <Link to={`/shiftschedule/edit/${this.state.shift.id}`}>
                <button value="update" type="update">
                    Update
                </button>
                </Link>

                <button value="delete" type="submit" onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

export default ShiftSchedDetail;