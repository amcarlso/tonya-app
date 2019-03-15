import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
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
        <header>Tonya's App</header>
        <div className='button-container'>
          <Link to='/'>
            <span className='nav-buttons'>
              Home
            </span>
          </Link>
          <Link to='/about'>
            <span className='nav-buttons'>
              About
            </span>
          </Link>
          <Link to='/classes'>
            <span className='nav-buttons'>
              Classes
            </span>
          </Link>
          <Link to='/contact'>
            <span className='nav-buttons'>
              Contact
            </span>
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Nav);