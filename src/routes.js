import React from 'react';
import { Switch, Route } from 'react-router-dom';

//imported Components
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Classes from './Components/Classes/Classes';
import Contact from './Components/Contact/Contact';
 

export default (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/classes' component={Classes}/>
    <Route path='/contact' component={Contact}/>
  </Switch>
)