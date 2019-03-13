import React, { Component } from 'react';
import Employee from '../Employee/Employee';
import EmployeeCreate from '../Employee/EmployeeCreate';
import ManagerList from '../Manager/ManagerList'
import ManagerCreate from '../Manager/ManagerCreate';
import WeeklyAvailability from '../WeeklyAvailability/WeeklyAvailability';
import Unavailability from '../Unavailability/Unavailability'
import UnavailabilityCreate from '../Unavailability/UnavailabilityCreate';

class App extends Component {

  render() {
    return (
      <div>
        <Employee />
        <ManagerList />
        <ManagerCreate />
        <WeeklyAvailability />
        <Unavailability />
        <EmployeeCreate />
        <UnavailabilityCreate />
      </div>
    );
  }
}

export default App;