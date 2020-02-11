import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';


import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';


class App extends Component {

  render() {

    return (
      <div className="app">
        <Switch>
          {/* <Route exact path="/" component={About}/> */}
        </Switch>
      </div>
    )
  }
}


export default withRouter(App);
