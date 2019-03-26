import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

const styles = {
    textDecoration: 'none'
}

class Home extends Component {
    
    render() {
        return (
            <div className='homeStyle'>
                <h1>Welcome to Scheduler!</h1>
                <h3>Ready to make your lineup?</h3>
                <h3>Head to <Link className='linkStyle' style={styles} to='/employees'>Roster</Link> to begin!</h3>
            </div>
        );
    }
}
export default Home;