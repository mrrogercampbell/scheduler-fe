import React, { Component } from 'react';
import Employee from '../Employee/Employee';
import EmployeeCreate from '../Employee/EmployeeCreate';
import ManagerList from '../Manager/ManagerList'
import ManagerCreate from '../Manager/ManagerCreate';
import WeeklyAvailability from '../WeeklyAvailability/WeeklyAvailability';
import Unavailability from '../Unavailability/Unavailability'
import UnavailabilityCreate from '../Unavailability/UnavailabilityCreate';
import WeeklyAvailabilityCreate from '../WeeklyAvailability/WeeklyAvailabilityCreate';

class App extends Component {

  render() {
    return (
      <div>
        <Employee />
        <EmployeeCreate />
        <ManagerList />
        <ManagerCreate />
        <WeeklyAvailability />
        <WeeklyAvailabilityCreate />
        <Unavailability />
        <UnavailabilityCreate />
      </div>
    );
  }
}

export default App;