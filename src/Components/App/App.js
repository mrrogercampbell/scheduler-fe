import React, { Component } from 'react';
import Employee from '../Employee/Employee';
import EmployeeCreate from '../Employee/EmployeeCreate';
import ManagerList from '../Manager/ManagerList'
import ManagerCreate from '../Manager/ManagerCreate';
import WeeklyAvailability from '../WeeklyAvailability/WeeklyAvailability';
import Unavailability from '../Unavailability/Unavailability'
import ManagerUpdate from '../Manager/ManagerUpdate';
import { Route, Link } from "react-router-dom";
import ManagerDetails from '../Manager/ManagerDetails';
import UnavailabilityCreate from '../Unavailability/UnavailabilityCreate';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Link to="/">
          <h1 className="nav-link active">Scheduler</h1>
        </Link>

        <nav className="nav nav-pills nav-fill nav justify-content-center van">

          <Link to="/employees">
            <h2 className="nav-link active">Employee Roster</h2>
          </Link>

          <Link to="/employee/new">
            <h2 className="nav-link active">Add Employee</h2>
          </Link>

          <Link to="/managers">
            <h2 className="nav-link active">Managers</h2>
          </Link>

          <Link to="/manager/new">
            <h2 className="nav-link active">Add Manager</h2>
          </Link>

        </nav>

        <main>
          {/* <Route
            exact path="/employee/:id" render={routerProps => <EmployeeDetail {...routerProps} />} /> */}

          <Route
            exact path="/employees" render={routerProps => <Employee {...routerProps} />} />

          <Route
            exact path="/manager/new" render={routerProps => <ManagerCreate {...routerProps} />} />

          <Route
            exact path="/manager/edit/:id" render={routerProps => <ManagerUpdate {...routerProps} />} />

          <Route
            exact path="/manager/:id" render={routerProps => <ManagerDetails {...routerProps} />} />

          <Route
            exact path="/managers" render={routerProps => <ManagerList {...routerProps} />} />
        </main>

        {/* <Employee />
        <ManagerList />
        <ManagerCreate />
        <WeeklyAvailability />
        <Unavailability /> */}
        {/* <ManagerUpdate /> */}
        <Unavailability />
        <EmployeeCreate />
        <UnavailabilityCreate />
      </div>
    );
  }
}

export default App;