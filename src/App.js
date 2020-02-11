import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar/Siderbar';


import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';


class App extends Component {

  render() {

    return (
      <div className="app">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={About}/>
          <Route path="/portfolio" component={Projects}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    )
  }
}


export default withRouter(App);
