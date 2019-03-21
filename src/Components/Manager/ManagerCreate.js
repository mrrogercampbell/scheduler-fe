import React, { Component } from 'react';
import axios from "axios";
import { API_URL } from '../../config/const'

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
  };

  onSubmit = e => {
    e.preventDefault();
    axios.post(API_URL + '/managers', this.state).then(result => {
      console.log(result)
      this.props.history.push("/managers");
    }).catch((error) => {
      console.log(error)
    })
  };

  render() {
    const { full_name, position, photo_url } = this.state;
    return (
      <form className='componentStyle' onSubmit={this.onSubmit}>
        <h3 className='headerStyle formStyle'>Add Manager</h3>
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