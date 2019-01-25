import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'

import Handler from './containers/handler/handler';

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
