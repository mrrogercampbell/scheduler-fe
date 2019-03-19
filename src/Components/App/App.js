import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './App.css'
import Employee from '../Employee/Employee';
import EmployeeCreate from '../Employee/EmployeeCreate';
import EmployeeUpdate from '../Employee/EmployeeUpdate'
import EmployeeDetails from '../Employee/EmployeeDetails'
import ManagerCreate from '../Manager/ManagerCreate';
import ManagerList from '../Manager/ManagerList'
import ManagerDetails from '../Manager/ManagerDetails';
import ManagerUpdate from '../Manager/ManagerUpdate';
import WeeklyAvailabilityCreate from '../WeeklyAvailability/WeeklyAvailabilityCreate';
import WeeklyAvailability from '../WeeklyAvailability/WeeklyAvailability';
import UnavailabilityCreate from '../Unavailability/UnavailabilityCreate';
import Unavailability from '../Unavailability/Unavailability'
import UnavailabilityDetails from '../Unavailability/UnavailabilityDetails'
import ShiftSchedCreate from '../ShiftSched/ShiftSchedCreate'
import ShiftSchedList from '../ShiftSched/ShiftSchedList';
import ShiftSchedUpdate from '../ShiftSched/ShiftSchedUpdate'
import ShiftSchedDetail from '../ShiftSched/ShiftSchedDetail'
import Home from '../Home'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className='App'>
        <Navbar color="faded" light expand="md">
            {/* Brandname */}
          <NavbarBrand href="/">
            Scheduler
          </NavbarBrand>
               {/* Add toggler to auto-collapse */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            {/* Pull right */}
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Roster
                </DropdownToggle>

                <DropdownMenu >
                  <DropdownItem>
                    Managers
                  </DropdownItem>
                  <DropdownItem>
                    + TO Request
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>




        <nav className="nav nav-pills nav-fill nav justify-content-center van">

          <Link to="/">
            <h1 className="nav-link active">Scheduler</h1>
          </Link>

          <Link to="/employees">
            <h3 className="nav-link active">Roster</h3>
          </Link>

          <Link to="/managers">
            <h3 className="nav-link active">Managers</h3>
          </Link>

          <Link to="/unavailability/new">
            <h3 className="nav-link active">+ TO Req</h3>
          </Link>

          <Link to="/availability">
            <h3 className="nav-link active">View Employee Weekly Availability</h3>
          </Link>

          <Link to="/shiftschedules">
            <h3 className="nav-link active">Shift Schedules List</h3>
          </Link>
        </nav>

        <main>
          <Switch>
            {/* <Route
            exact path="/employee/:id" render={routerProps => <EmployeeDetail {...routerProps} />} /> */}

            <Route
              exact path="/employee/new" render={routerProps => <EmployeeCreate {...routerProps} />} />

            <Route
              exact path="/employees" render={routerProps => <Employee {...routerProps} />} />

            <Route
              exact path="/employee/edit/:id" render={routerProps => <EmployeeUpdate {...routerProps} />} />

            <Route
              exact path="/employee/:id" render={routerProps => <EmployeeDetails {...routerProps} />} />

            <Route
              exact path="/manager/new" render={routerProps => <ManagerCreate {...routerProps} />} />

            <Route
              exact path="/manager/edit/:id" render={routerProps => <ManagerUpdate {...routerProps} />} />

            <Route
              exact path="/manager/:id" render={routerProps => <ManagerDetails {...routerProps} />} />

            <Route
              exact path="/managers" render={routerProps => <ManagerList {...routerProps} />} />

            <Route
              exact path="/unavailability/new" render={routerProps => <UnavailabilityCreate {...routerProps} />} />

            <Route
              exact path="/unavailability" render={routerProps => <Unavailability {...routerProps} />} />

            <Route
              exact path="/unavailability/:id" render={routerProps => <UnavailabilityDetails {...routerProps} />} />

            <Route
              exact path="/availability/new" render={routerProps => <WeeklyAvailabilityCreate {...routerProps} />} />

            <Route
              exact path="/availability" render={routerProps => <WeeklyAvailability {...routerProps} />} />

            <Route
              exact path="/shiftschedule/new" render={routerProps => <ShiftSchedCreate {...routerProps} />} />

            <Route
              exact path="/shiftschedules" render={routerProps => <ShiftSchedList {...routerProps} />} />

            <Route
              exact path="/shiftschedule/edit/:id" render={routerProps => <ShiftSchedUpdate {...routerProps} />} />

            <Route
              exact path="/shiftschedule/:id" render={routerProps => <ShiftSchedDetail {...routerProps} />} />

            <Route
              exact path="/" render={routerProps => <Home {...routerProps} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;