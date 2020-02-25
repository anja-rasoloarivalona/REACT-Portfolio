import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import DropDownList from './components/DropDownList/DropDownList'
import Sidebar from './components/Sidebar/Siderbar';
import LandingPage from './pages/LandingPage/LandingPage'
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import { IntlProvider} from 'react-intl';
import messages from "./messages"
import queryString from 'query-string';




class App extends Component {

  state = {
    started: false,
    lang: 'English'
  }

  componentDidMount(){
    
    let parsedQuery = queryString.parse(this.props.location.search)

    console.log(parsedQuery);

    if(parsedQuery){
      let lang = parsedQuery.lang;
      let newLang
      if(lang === 'français'){
        lang = 'Français'
        newLang = "French"
      } else {
        lang = "English"
        newLang = "English"
      }

      

      this.setState({ lang: newLang}, () => this.props.history.push({
        pathname: this.props.location.pathname,
        search: `lang=${lang.toLowerCase()}`
      }))
    } else {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `lang=${this.state.lang.toLowerCase()}`
      })
    }
  }

  getStartedHandler = () => {
    this.setState({ started: true})
  }

  selectLangHandler = lang => {
    let newLang;
    if(lang === 'French'){
      newLang = 'Français'
    } else {
      newLang = "English"
    }
    this.setState({ lang }, () =>  this.props.history.push({
      pathname: this.props.location.pathname,
      search: `lang=${newLang.toLowerCase()}`
    }))
  }


  render() {
    const { started, lang } = this.state

    return (
      <IntlProvider locale={lang}
                    messages={messages[lang]}
      >
        <div className={`app ${started ? 'started': ''}`}>
        <div className="app__mounting">
            <LandingPage getStartedHandler={this.getStartedHandler}/>
        </div>  
        <Sidebar started = {started}/>
        <div className="app__container">  
          <DropDownList 
              selectItemHandler={this.selectLangHandler}
              value={lang}
          />
          <Switch>
            <Route exact path="/" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </div>
        </div>
      </IntlProvider>
      
    )
  }
}


export default withRouter(App);
