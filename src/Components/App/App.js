import React, { Component } from 'react';
import Employee from '../Employee/Employee';
import ManagerList from '../Manager/ManagerList'
import ManagerCreate from '../Manager/ManagerCreate';

class App extends Component {

  render() {
    return (
      <div>
        <Employee />
        <ManagerList />
        <ManagerCreate />
      </div>
    );
  }
}

export default App;