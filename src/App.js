import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'

import Handler from './containers/handler/handler';
import Users from './../src/containers/Users/Users';
import Courses from './containers/Courses/Courses';
import Welcome from './containers/welcome/Welcome'


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
        <Handler />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
