import React, { Component } from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Home from './pages/home/Home';

class App extends Component {

  state = {
    activeSection: 'home',
    sectionsPos: null, 
    lastPos: 0,
    language: 'fr'
  }

  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {

    const {sectionsPos, lastPos} = this.state;
    let scrollPos = window.pageYOffset; 

    let scrollDirection = '';

    if( scrollPos > lastPos){
      scrollDirection = 'bottom'
    } else {
      scrollDirection = 'top'
    }

    const sectionName = Object.keys(sectionsPos);

   sectionName.forEach( section => {

      if(scrollDirection === 'bottom'){
        if(scrollPos >= sectionsPos[section].min  && scrollPos <= sectionsPos[section].max){
          this.setState({
            lastPos: scrollPos,
            activeSection: section
          }, () => console.log(this.state.activeSection))
        } 
        else {
          this.setState({
            lastPos: scrollPos
          })
        }
      }

      if(scrollDirection === 'top' &&  (this.state.lastPos - scrollPos) > 200 ){
        let previousSection;   
        let activeSectionIndex = sectionName.findIndex( el => el === this.state.activeSection);
        if(activeSectionIndex !== 0){
          previousSection = sectionName[activeSectionIndex - 1]
        } else {
          previousSection = sectionName[0]
        }
        let previousSectionTrigger = sectionsPos[previousSection].min + ( (sectionsPos[previousSection].max - sectionsPos[previousSection].min) / 2 )
  
        if(scrollPos <= previousSectionTrigger )  {
          this.setState({
            lastPos: scrollPos,
            activeSection: previousSection
          }, () => console.log(this.state.activeSection))
        } else {
          this.setState({
            lastPos: scrollPos
          })
        }
      }
      
    })

    
  }

  setSectionsPos = data => {
    this.setState( {sectionsPos : data }, () => window.addEventListener('scroll', this.listenToScroll)  )
  }

  toggleLanguageHandler = () => {
    let currentLanguage = this.state.language;
    let newLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    this.setState({ language: newLanguage})
  }

  render() {

    return (
      <div className="App">
        <Sidebar activeSection={this.state.activeSection}/>
        <Home setSectionsPos = {this.setSectionsPos}
              language={this.state.language}
              toggleLanguageHandler={this.toggleLanguageHandler}/>
      </div>
    )
  }
}


export default App;
