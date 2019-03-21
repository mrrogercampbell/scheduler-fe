import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config/const'

const styles = {
    textDecoration: 'none'
}

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
            axios.get(API_URL + '/schedulebyshifts'),
            axios.get(API_URL + '/employees')
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
            return <div className='itemStyle' key={i}>
                <Link className='linkStyle' style={styles} to={'/shiftschedule/' + item.id}><h2>Date: {item.date}</h2></Link>
                <h3>Shift: {item.shift}</h3>
                <h4>Open Sections: {item.num_of_sections}</h4>
                <h4>Working RED section: {red}</h4>
                <h4>Working ORANGE section: {orange}</h4>
                <h4>Working YELLOW section: {yellow}</h4>
                <h4>Working GREEN section: {green}</h4>
                <h4>Working BLUE section: {blue}</h4>
                <h4>Working PURPLE section: {purple}</h4>
            </div>
        })
        return (
            <div className='componentStyle'>
                <h2 className='headerStyle'>Shift Schedules <Link className='linkStyle' style={styles} to="/shiftschedule/new">+</Link></h2>
                {schedules}
            </div>
        );
    }
}

export default ShiftSchedList;