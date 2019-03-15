import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Nav extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <div>Nav Bar</div>
    )
  }
}

export default withRouter(Nav);