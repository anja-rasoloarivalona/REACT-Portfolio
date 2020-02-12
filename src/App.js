import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar/Siderbar';
import LandingPage from './pages/LandingPage/LandingPage'

import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';


class App extends Component {

  state = {
    started: false
  }

  getStartedHandler = () => {
    this.setState({ started: true})
  }


  render() {
    const { started } = this.state
    return (
      <div className={`app ${started ? 'started': ''}`}>

        <div className="app__mounting">
            <LandingPage getStartedHandler={this.getStartedHandler}/>
        </div>  

        <Sidebar started = {started}/>

        <div className="app__container">  
          <Switch>
            <Route exact path="/" component={About}/>
            <Route path="/portfolio" component={Projects}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </div>
      </div>
    )
  }
}


export default withRouter(App);
