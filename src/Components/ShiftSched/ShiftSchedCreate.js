import React, { Component } from 'react';

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
            <div>
                
            </div>
        );
    }
}

export default ShiftSchedCreate;