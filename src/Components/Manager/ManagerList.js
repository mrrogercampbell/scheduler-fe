import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import { API_URL } from '../../config/const'
import './Manager.css'

const styles = {
  textDecoration: 'none'
}

class ManagerList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      managers: []
    }
  }
  componentDidMount() {
    axios.get(API_URL + '/managers').then(
      (response) => {
        this.setState({
          managers: response.data
        })
      })
  }
  render() {
    let managers = this.state.managers.map((item, i) => {
      return <div className='itemStyle' key={i}>
        <img className='photoStyle' src={item.photo_url} alt={item.full_name}></img>
        <h2>Name: <Link className='linkStyle' style={styles} to={'/manager/' + item.id}> {item.full_name}</Link></h2>
        <h4>Position: {item.position}</h4>
      </div>
    })
    return (
      <div className='componentStyle'>
        <h2 className='headerStyle'>Managers <Link className=
        'linkStyle' style={styles} to="/manager/new">+</Link></h2>
        {managers}

      </div>
    );
  }
}

export default ManagerList;