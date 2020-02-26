import React, { Component } from 'react'
import './Projects.css';
import Phone from '../../components/Phone/Phone';
import IconSvg from "../../utilities/svg/svg";
import Button from '../../components/Button/Button'
import { FormattedMessage } from 'react-intl'

class Projects extends Component {

    state = {
        display: 'list',
        showWotoLogs: false
    }

    toggleShowWotoLogs = () => {
        this.setState(prevState => ({
            ...prevState,
            showWotoLogs: !prevState.showWotoLogs
        }))
    }

    componentDidMount(){
        document.addEventListener('mousedown', this.handleClick, false)
    }
    
    componentWillUnmount(){
         document.removeEventListener('mousedown', this.handleClick, false)
    }

    handleClick = e => { 
        if(this.target && this.target.contains(e.target)){
            return
        } else {
            if(this.state.showWotoLogs){
                this.toggleShowWotoLogs()
            }
            
        }     
    }


    render() {  
        const {showWotoLogs} = this.state;        
            return (
                <div className="projects"> 

                    
                    <div className={`project__woto__loginContainer ${showWotoLogs ? 'show' : ''}`}>
                        <div className="project__woto__login"
                         ref={el => this.target = el}>
                            <h2>Woto Login</h2>    
                            <div className="project__woto__login__part">
                                <h3  className="project__woto__login__part__title">Client</h3>
                                <ul className="project__woto__login__part__list">
                                    <li className="project__woto__login__part__list__item">
                                        <span className="project__woto__login__part__list__item__key">email</span>
                                        <span className="project__woto__login__part__list__item__value">woto-client@mail.com</span>
                                    </li>
                                    <li className="project__woto__login__part__list__item">
                                        <span className="project__woto__login__part__list__item__key">password</span>
                                        <span className="project__woto__login__part__list__item__value">Passw0rd</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="project__woto__login__part">
                                <h3  className="project__woto__login__part__title">Admin</h3>
                                <ul className="project__woto__login__part__list">
                                    <li className="project__woto__login__part__list__item">
                                        <span className="project__woto__login__part__list__item__key">email</span>
                                        <span className="project__woto__login__part__list__item__value">woto-admin@mail.com</span>
                                    </li>
                                    <li className="project__woto__login__part__list__item">
                                        <span className="project__woto__login__part__list__item__key"><FormattedMessage id="password" defaultMessage="password"/></span>
                                        <span className="project__woto__login__part__list__item__value">Passw0rd</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="project__woto__login__cta">
                                <Button color="primary" onClick={this.toggleShowWotoLogs}>OK</Button>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                            <div className="project__title project__title--woto">
                                <h1>Woto motors</h1>
                                <div className="project__logs-toggler" onClick={this.toggleShowWotoLogs}>
                                    <span><FormattedMessage id="howToLogin" defaultMessage="How to login"/></span>
                                    <IconSvg icon="lamp"/>
                                </div>
                            </div>
                            <p className="project__desc">
                                <FormattedMessage id="wotoDescription" defaultMessage="Woto was my first real project, and by far the most complex. Woto is a car dealership built by a friend of mine. In order to help his business, I created all the necessary tools: the customer portal allowing users to consult the vehicles and save them in their account as well as a back office allowing a given administrator to manipulate all the data without coding."/>
                            </p>
                            <div className="project__framework">
                                <h2 className="project__framework__title"><FormattedMessage id="frameworkAndFeatures" defaultMessage="Framework and Features"/></h2>
                                <ul className="project__framework__list">
                                        <li className="project__framework__list__item">
                                            <span className="project__framework__list__item__key">Front-End</span>
                                            <span className="project__framework__list__item__value">React & Redux</span>
                                        </li>
                                        <li className="project__framework__list__item">
                                            <span className="project__framework__list__item__key">Back-End</span>
                                            <span className="project__framework__list__item__value">Node.js - expressJS</span>
                                        </li>
                                        <li className="project__framework__list__item">
                                            <span className="project__framework__list__item__key"><FormattedMessage id="dataBase" defaultMessage="Data Base"/></span>
                                            <span className="project__framework__list__item__value">MongoDB</span>
                                        </li>
                                        <li className="project__framework__list__item">
                                            <span className="project__framework__list__item__key"><FormattedMessage id="imageStorage" defaultMessage="Image Storage"/></span>
                                            <span className="project__framework__list__item__value">Firebase</span>
                                        </li>
                                        <li className="project__framework__list__item">
                                            <span className="project__framework__list__item__key"><FormattedMessage id="liveMessageAndStatus" defaultMessage="Live message and status"/></span>
                                            <span className="project__framework__list__item__value">Socket.io</span>
                                        </li>
                                        <li className="project__framework__list__item">
                                            <span className="project__framework__list__item__key"><FormattedMessage id="currency" defaultMessage="Currency"/></span>
                                            <span className="project__framework__list__item__value">Currencylayer API</span>
                                        </li>
                                        <li className="project__framework__list__item">
                                            <span className="project__framework__list__item__key"><FormattedMessage id="multiLanguage" defaultMessage="Multilingual"/></span>
                                            <span className="project__framework__list__item__value">react-intl</span>
                                        </li>
                                        <li className="project__framework__list__item">
                                            <span className="project__framework__list__item__key"><FormattedMessage id="authentification" defaultMessage="Authentification"/></span>
                                            <span className="project__framework__list__item__value">Yes</span>
                                        </li>
                                        <li className="project__framework__list__item">
                                            <span className="project__framework__list__item__key"><FormattedMessage id="charts" defaultMessage="Charts"/></span>
                                            <span className="project__framework__list__item__value">react-chartjs-2</span>
                                        </li>                        
                                </ul>
                                <div className="project__cta"
                                    onClick={() => window.open('https://trimmo-real-estate.web.app/')}>
                                        <IconSvg icon="launch"/>
                                        <span><FormattedMessage id="launchDemo" defaultMessage="Launch Demo"/></span>
                                </div>         
                            </div>
                            <div className="project__gallery">
                                <div className="project__gallery__item">
                                    <div className="project__gallery__item__title">
                                        <h3>Client</h3>
                                    </div>
                                    <div className="project__gallery__item__img project__gallery__item__img--client">
                                    </div>
                                </div>
                                <div className="project__gallery__item">
                                    <h3 className="project__gallery__item__title">
                                        Admin
                                    </h3>
                                    <div className="project__gallery__item__img project__gallery__item__img--admin">
                                    </div>
                                </div>                                        
                            </div>
                    </div>


                    <div className="project">
                            <h1 className="project__title">Trimmo Real Estate</h1>
                            <p className="project__desc">
                                <FormattedMessage id="trimmoRealEstate" defaultMessage="Trimmo real estate is a fictitious real estate agency based in Canada. Users can consult the different properties based on price, type, number of bathrooms but mostly on location. As a bonus, they can view all this data on google map."/>
                            </p>                        
                            <div className="project__framework">
                                <h2 className="project__framework__title"><FormattedMessage id="frameworkAndFeatures" defaultMessage="Framework and Features"/></h2>
                                <ul className="project__framework__list">
                                    <li className="project__framework__list__item">
                                        React & Redux
                                    </li>
                                    <li className="project__framework__list__item">
                                        Google Map API
                                    </li>
                                    <li className="project__framework__list__item">
                                        Filters
                                    </li>
                                </ul>
                                <div className="project__cta"
                                    onClick={() => window.open('https://trimmo-real-estate.web.app/')}>
                                        <IconSvg icon="launch" />
                                        <span><FormattedMessage id="launchDemo" defaultMessage="Launch Demo"/></span>
                                </div>
                            </div>
                            <div className="project__img">
                                <Phone image="trimmo" openProject={() => window.open('https://trimmo-real-estate.web.app/')}></Phone>
                            </div>
                
                        
                    </div>


                    <div className="project"> 
                            <h1 className="project__title">Triano Restaurant</h1>
                            <p className="project__desc">
                                <FormattedMessage id="trianoRestaurant" defaultMessage="Triano Restaurant is a fictional restaurant based in Montreal. When I developed this website, my goal was to practice as well as to diversify my project portfolio."/>
                            </p>                       
                            <div className="project__framework">
                                <h2 className="project__framework__title"><FormattedMessage id="frameworkAndFeatures" defaultMessage="Framework and Features"/></h2>
                                <ul className="project__framework__list">
                                    <li className="project__framework__list__item">
                                        React & Redux
                                    </li>
                                </ul>
                                <div className="project__cta"
                                onClick={() => window.open('https://triano-restaurant.web.app/')}>
                                    <IconSvg icon="launch"/>
                                    <span><span><FormattedMessage id="launchDemo" defaultMessage="Launch Demo"/></span></span>
                                </div>
                            </div>              
                            <div className="project__img">
                                <Phone image="triano" openProject={() => window.open('https://triano-restaurant.web.app/')}></Phone>
                            </div>
                    </div>


                    <div className="project">
                            <h1 className="project__title">Weather Finder</h1>
                            <p className="project__desc">
                                <FormattedMessage id="weatherFinder" defaultMessage="Weather Finder is a website that provides live weather information for any city in the world. The information is provided by the Open Weather API."/>
                            </p>
                            <div className="project__framework">
                                <h2 className="project__framework__title"><FormattedMessage id="frameworkAndFeatures" defaultMessage="Framework and Features"/></h2>
                                <ul className="project__framework__list">
                                    <li className="project__framework__list__item">
                                        React & Redux
                                    </li>
                                    <li className="project__framework__list__item">
                                        Open Weather
                                    </li>
                                    <li className="project__framework__list__item">
                                        <FormattedMessage id='searchForAnyCity' defaultMessage="Search for any city"/>
                                    </li>
                                </ul>
                                <div className="project__cta"
                                    onClick={() => window.open("https://weather-finder-anja.firebaseapp.com/")}>
                                    <IconSvg icon="launch"/>
                                    <span><FormattedMessage id="launchDemo" defaultMessage="Launch Demo"/></span>
                                </div>
                            </div>
                            <div className="project__img">
                                <Phone image="weather"  openProject={() => window.open("https://weather-finder-anja.firebaseapp.com/")}></Phone>
                            </div>                 
                    </div>

                   
                </div>
            )
        
    }
}


export default Projects; 