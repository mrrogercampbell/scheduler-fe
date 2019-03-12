import React, { Component } from 'react';
import axios from 'axios'

class ManagerList extends Component {
    constructor (props) {
        super(props)
        this.state = {
        managers: []
        }
    }
    componentDidMount () {
        axios.get('http://localhost:8000/api/managers').then((response) => {
          this.setState({
            managers: response.data
          })
        })
      }
    render() {
        let managers = this.state.managers.map((item, i) => {
            return <h2 className='managers-manager' key={i}>
              <p>Name: {item.full_name}</p>
              <p>Position: {item.position}</p>
              <p>Photo: <img src={item.photo_url}></img></p>
            </h2>
          })
        return (
            <div>
                <h1>Managers:</h1>
                {managers}
            </div>
        );
    }
}

export default ManagerList;