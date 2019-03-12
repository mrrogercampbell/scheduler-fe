import React, { Component } from 'react';

class App extends Component {
  state = {
    employees: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/api/employees');
      const employees = await res.json();
      this.setState({
        employees
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.employees.map(item => (
          <div key={item.id}>
            <h1>{item.full_name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;