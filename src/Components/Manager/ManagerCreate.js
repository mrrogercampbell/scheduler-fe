import React, { Component } from 'react';
import axios from "axios";
// import { error } from 'util';

class ManagerCreate extends Component {
  constructor() {
    super();
    this.state = {
      full_name: "",
      position: "",
      photo_url: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
    // console.log(this.state.position);
    // console.log(this.state.full_name);
    // console.log(this.state.photo_url);
  };

  onSubmit = e => {
    e.preventDefault();
    // console.log(this.state)
    // axios.post('http://localhost:8000/api/managers', 
    axios.post('https://scheduler-be-1.herokuapp.com/api/managers', this.state).then(result => {
      console.log(result)
      this.props.history.push("/managers");
    }).catch((error) => {
      console.log(error)
    })
  };

  render() {
    const { full_name, position, photo_url } = this.state;
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
        <select name="position" value={position} onChange={this.onChange}>
          <option name="position" value='manager'>Manager</option>
          <option name="position" value='general_manager'>General Manager</option>
          <option name="position" value="assistant_manager">Assistant Manager</option>
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