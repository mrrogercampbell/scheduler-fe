import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from '../../config/const'

class ManagerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manager: {}
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get(API_URL + '/manager/' + this.props.match.params.id)
      .then((res) => {
        this.setState({
          manager: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleDelete = e => {
    e.preventDefault();
    axios.delete(API_URL + '/manager/' + this.props.match.params.id)
      .then((res) => {
        console.log(res.data)
        this.setState({
          manager: {}
        });
        this.props.history.push("/managers");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log('inside manager details render')
    const { full_name, position, photo_url } = this.state.manager
    return (
      <div key={this.state.manager.id}>
        <h1>Name: {full_name}</h1>
        <h2>Position: {position}</h2>
        <img src={photo_url} alt={full_name} />

        <Link to={`/manager/edit/${this.state.manager.id}`}>
          <button value="update" type="update">
            Update
                </button>
        </Link>

        <button value="delete" type="submit" onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default ManagerDetails;