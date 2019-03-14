import React, { Component } from 'react';
import axios from "axios";

class ManagerCreate extends Component {
    constructor() {
        super();
        this.state = {
          newManager: {
            full_name: "",
            position: "",
            photo_url: ""
          },
          positionOptions: ['Manager', 'General Manager', 'Assistant Manager']
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/managers', this.state).then(result => {
          console.log(result)
          this.props.history.push("/managers");
        });
      };

    render() {
        const { full_name, position, photo_url } = this.state.newManager;
        return (
            <form onSubmit={this.onSubmit}>
            <label>Full Name:</label>
            <input
              type="text"
              name="full_name"
              value={full_name}
              onChange={this.onChange}
            />
            <br />
            <label>Position: </label>
            <select value={position} onChange={this.onChange}>
                <option name='position' value='Manager'>Manager</option>
                <option name='position' value='General Manager'>General Manager</option>
                <option name='position' value="Assistant Manager">Assistant Manager</option>
            </select>
            <br />
            <label>Photo URL:</label>
            <input
              type="text"
              name="photo_url"
              value={photo_url}
              onChange={this.onChange}
            />
            <button type="submit">Submit</button>
          </form>
        );
    }
}

export default ManagerCreate;