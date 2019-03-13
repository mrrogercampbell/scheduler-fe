import React, { Component } from 'react';
import Employee from '../Employee/Employee';
import ManagerList from '../Manager/ManagerList'
import ManagerCreate from '../Manager/ManagerCreate';
import WeeklyAvailability from '../WeeklyAvailability/WeeklyAvailability';
import Unavailability from '../Unavailability/Unavailability'
import EmployeeCreate from '../Employee/EmployeeCreate';

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
      </div>
    );
  }
}

export default App;