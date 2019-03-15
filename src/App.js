import React, { Component } from 'react';
import './App.scss';
import Nav from './Components/Nav/Nav';

import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
