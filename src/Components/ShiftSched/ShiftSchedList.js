import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class ShiftSchedList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            schedules: [],
            employees: []
        }
    }
    componentDidMount() {
        axios.all([
            axios.get('http://localhost:8000/api/schedulebyshifts'),
            axios.get('http://localhost:8000/api/employees')
        ])
            .then(axios.spread((shiftRes, empRes) => {
                this.setState({
                    schedules: shiftRes.data,
                    employees: empRes.data
                })
            }))
    }

    render() {
        console.log(this.state.schedules)
        let red, orange, yellow, green, blue, purple
        let schedules = this.state.schedules.map((item, i) => {
            red = this.state.employees.map((cv) => {
                if (cv.id === item.section_red) {
                    return cv.full_name
                }
            })
            orange = this.state.employees.map((cv) => {
                if (cv.id === item.section_orange) {
                    return cv.full_name
                }
            })
            yellow = this.state.employees.map((cv) => {
                if (cv.id === item.section_yellow) {
                    return cv.full_name
                }
            })
            green = this.state.employees.map((cv) => {
                if (cv.id === item.section_green) {
                    return cv.full_name
                }
            })
            blue = this.state.employees.map((cv) => {
                if (cv.id === item.section_blue) {
                    return cv.full_name
                }
            })
            purple = this.state.employees.map((cv) => {
                if (cv.id === item.section_purple) {
                    return cv.full_name
                }
            })
            return <h2 className='schedules-schedule' key={i}>
                <Link to={'/shiftschedule/' + item.id}><p>Date: {item.date}</p></Link>
                <p>Shift: {item.shift}</p>
                <p>Open Sections: {item.num_of_sections}</p>
                <p>Working RED section: {red}</p>
                <p>Working ORANGE section: {orange}</p>
                <p>Working YELLOW section: {yellow}</p>
                <p>Working GREEN section: {green}</p>
                <p>Working BLUE section: {blue}</p>
                <p>Working PURPLE section: {purple}</p>
            </h2>
        })
        return (
            <div>
                <h1>Shift Schedules:</h1>
                {schedules}
                <button>
                    <Link to="/shiftschedule/new">
                        <h3 className="nav-link active">+ Shift</h3>
                    </Link>
                </button>
            </div>
        );
    }
}

export default ShiftSchedList;