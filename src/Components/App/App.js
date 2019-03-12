import React, { Component } from 'react';
import Employee from '../Employee/Employee';
import WeeklyAvailability from '../WeeklyAvailability/WeeklyAvailability';

class App extends Component {

  render() {
    return (
      <div>
        <Employee />
        <WeeklyAvailability />
      </div>
    );
  }
}

export default App;