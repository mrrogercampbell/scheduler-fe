import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
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
import MasterDnD from '../MasterDnD/MasterDnD'
import Home from '../Home/Home'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, UncontrolledDropdown, DropdownMenu, DropdownItem, NavItem, NavLink } from 'reactstrap'
import styled from 'styled-components'

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

const Container = styled.div`
`

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    }
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
        <Navbar className='navbar-style' light  expand="md">
          <NavbarBrand style={{ color: 'rgb(227,118,105)', fontSize: '2em'}}href="/">Scheduler</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar >
              <NavItem className='navitem-style'>
                <NavLink href="/employees">Roster</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/managers">Managers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/unavailability/new">+ TO Request</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/availability">Availability</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/shiftschedules">Shifts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/masterdnd">Demo</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <main>
          <Switch>
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

            <Route
              exact path="/masterdnd" render={routerProps => <MasterDnD {...routerProps} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;