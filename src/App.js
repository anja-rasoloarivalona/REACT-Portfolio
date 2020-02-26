import React, { Component } from 'react'
import { Route, Switch, withRouter} from 'react-router-dom';
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
import Navbar from './components/Navbar/Navbar';




class App extends Component {

  state = {
    started: false,
    lang: 'en',
    fullLang: 'english'
  }

  componentDidMount(){
    let parsedQuery = queryString.parse(this.props.location.search)
    if(Object.keys(parsedQuery).length > 0){
      let fullLang = parsedQuery.lang;
      let lang;
      if(fullLang === 'français'){
        lang = 'fr'
      } else {
        lang = "en"
      }  
      this.setState({ lang: lang, fullLang: fullLang}, () => this.props.history.push({
        pathname: this.props.location.pathname,
        search: `lang=${fullLang}`
      }))
    } else {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `lang=${this.state.fullLang}`
      })
    }
  }

  componentDidUpdate(prevProps){
   if(prevProps.location.pathname !== this.props.location.pathname){
     this.props.history.push({
       pathname: this.props.location.pathname,
       search: prevProps.location.search
     })
   }
  }

  getStartedHandler = () => {
    this.setState({ started: true})
  }

  selectLangHandler = fullLang => {
    let lang;
    if(fullLang === 'french'){
      fullLang = 'français'
      lang = 'fr'
    } else {
      lang = "en"
    }
    this.setState({ lang, fullLang }, () =>  this.props.history.push({
      pathname: this.props.location.pathname,
      search: `lang=${fullLang}`
    }))
  }


  render() {
    const { started, lang, fullLang } = this.state;
    let windowWidth = window.innerWidth;


    return (
      <IntlProvider locale={lang}
                    messages={messages[lang]}
      >
        <div className={`app ${started ? 'started': ''}`}>
          
          <div className="app__mounting">
              <LandingPage getStartedHandler={this.getStartedHandler}/>
          </div>  

          {windowWidth < 977 && (
            <Navbar started={started}/>
          )}
          {( windowWidth >= 977 && 
            <Sidebar started = {started}/>
          )}
          

          <div className="app__container">  
            <DropDownList 
                selectItemHandler={this.selectLangHandler}
                value={fullLang}
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
