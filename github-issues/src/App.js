import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TableDisplay } from './components/TableDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TableDisplay />
      </div>
    );
  }
}

export default App;
