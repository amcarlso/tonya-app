import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <div className='nav-bar'>
        <span className='nav-buttons'>
          Home
        </span>
        <span className='nav-buttons'>
          About
        </span>
        <span className='nav-buttons'>
          Classes
        </span>
        <span className='nav-buttons'>
          Contact
        </span>
      </div>
    )
  }
}

export default withRouter(Nav);