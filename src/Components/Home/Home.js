import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className='homeStyle'>
                <h1>Welcome to Scheduler!</h1>
                <h3>Ready to make your lineup?</h3>
                <h3>Head to <Link style={{ textDecoration: 'none', color: 'rgb(227,118,105)' }} to='/employees'>Roster</Link> to begin!</h3>
            </div>
        );
    }
}
export default Home;