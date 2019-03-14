import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class ShiftSchedList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          schedules: []
        }
      }
    componentDidMount() {
        axios.get('http://localhost:8000/api/schedulebyshifts').then((response) => {
            this.setState({
            schedules: response.data
            })
        })
    }

    render() {
        let schedules = this.state.schedules.map((item, i) => {
            return <h2 className='schedules-schedule' key={i}>
              <Link to={'/schedule/' + item.id}><p>Date: {item.date}</p></Link>
              <p>Shift: {item.shift}</p>
              <p>Open Sections: {item.num_of_sections}</p>
              <p>Working RED section: {item.section_red}</p>
              <p>Working ORANGE section: {item.section_orange}</p>
              <p>Working YELLOW section: {item.section_yellow}</p>
              <p>Working GREEN section: {item.section_green}</p>
              <p>Working BLUE section: {item.section_blue}</p>
              <p>Working PURPLE section: {item.section_purple}</p>
            </h2>
          })
        return (
            <div>
                <h1>Shift Schedules:</h1>
                {schedules}
            </div>
        );
    }
}

export default ShiftSchedList;