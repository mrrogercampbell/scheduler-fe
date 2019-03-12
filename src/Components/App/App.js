import React, { Component } from 'react';
import Employee from '../Employee/Employee';
import WeeklyAvailability from '../WeeklyAvailability/WeeklyAvailability';
import Unavailability from '../Unavailability/Unavailability'

class App extends Component {

  render() {
    return (
      <div>
        <Employee />
        <WeeklyAvailability />
        <Unavailability />
      </div>
    );
  }
}

export default App;