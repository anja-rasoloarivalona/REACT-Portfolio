import React, { Component } from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';


import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';


class App extends Component {

  state = {
    language: 'fr',
    currentSection: 'about me'
  }

  componentDidMount(){
    let currentSection = this.props.location.pathname.substring(1);
    if(currentSection === ''){
      currentSection = 'about me'
    }
    this.setState({ currentSection })
  }

  componentDidUpdate(){
   let currentSection = this.props.location.pathname.substring(1);
    if(currentSection === ''){
      currentSection = 'about me'
    }
    if(currentSection !== this.state.currentSection){
      this.setState({ currentSection })
    }
    
  }


  toggleLanguageHandler = () => {
    let currentLanguage = this.state.language;
    let newLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    this.setState({ language: newLanguage})
  }

  render() {

    return (
      <div className="app">
        <Header language={this.state.language}
                toggleLanguageHandler={this.toggleLanguageHandler}
                currentSection={this.state.currentSection}/>
        <Sidebar activeSection={this.state.activeSection}/>

        <Switch>
          <Route exact path="/" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/Contact" component={Contact}/>
        </Switch>
      </div>
    )
  }
}


export default withRouter(App);
