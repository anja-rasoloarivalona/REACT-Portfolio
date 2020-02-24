import React, { Component } from 'react'
import './Projects.css';
import Phone from '../../components/Phone/Phone';
import IconSvg from "../../utilities/svg/svg";
import Button from '../../components/Button/Button'

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

    componentWillMount(){
        document.addEventListener('mousedown', this.handleClick, false)
    }
    
    componentWillUnmount(){
         document.removeEventListener('mousedown', this.handleClick, false)
    }

    handleClick = e => { 
        console.log('click');
        
        
        if(this.target && this.target.contains(e.target)){
            return
        } else {
            if(this.state.showWotoLogs){
                this.toggleShowWotoLogs()
            }
            
        }     
    }


    render() {  
        
        const {showWotoLogs} = this.state
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
                                        <span className="project__woto__login__part__list__item__key">password</span>
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
                        <div className="project__info">
                            <div className="project__info__title project__info__title--woto">
                                <h1>Woto motors</h1>
                                <div className="project__info__logs-toggler"
                                     onClick={this.toggleShowWotoLogs}
                                >
                                    <span>How to login</span>
                                    <IconSvg icon="lamp"/>
                                </div>
                            </div>
                            <p className="project__info__desc">
                                Woto was my first real project, and by far the most complete and complex. Woto is a car dealership built by a friend of mine. In order to help his business, all by myself I created all the necessary tools: the customer portal allowing users to consult the vehicles as well as a back office allowing a given administrator to manipulate all the data without coding. 
                            </p>

                            <div className="project__info__gallery">

                                <div className="project__info__gallery__item">
                                    <div className="project__info__gallery__item__title">
                                        <h3>Client</h3>
                                    </div>
                                    <div className="project__info__gallery__item__img project__info__gallery__item__img--client">
                                    </div>
                                </div>
                                <div className="project__info__gallery__item">
                                    <h3 className="project__info__gallery__item__title">
                                        Admin
                                    </h3>
                                    <div className="project__info__gallery__item__img project__info__gallery__item__img--admin">
                                    </div>
                                </div>
                                
                               
                            </div>
                        </div>

                        <div className="project--woto__frameworkContainer">
                            <div className="project--woto__framework">
                                <h2 className="project__info__framework__title">Framework and Features</h2>
                                <ul className="project--woto__framework__list">
                                    <li className="project--woto__framework__list__item">
                                        <span className="project--woto__framework__list__item__key">Front-End</span>
                                        <span className="project--woto__framework__list__item__value">React & Redux</span>
                                    </li>
                                    <li className="project--woto__framework__list__item">
                                        <span className="project--woto__framework__list__item__key">Back-End</span>
                                        <span className="project--woto__framework__list__item__value">Node.js</span>
                                    </li>
                                    <li className="project--woto__framework__list__item">
                                        <span className="project--woto__framework__list__item__key">Data Base</span>
                                        <span className="project--woto__framework__list__item__value">MongoDB</span>
                                    </li>
                                    <li className="project--woto__framework__list__item">
                                        <span className="project--woto__framework__list__item__key">Image storage</span>
                                        <span className="project--woto__framework__list__item__value">Firebase</span>
                                    </li>
                                    <li className="project--woto__framework__list__item">
                                        <span className="project--woto__framework__list__item__key">Live message and status</span>
                                        <span className="project--woto__framework__list__item__value">Socket.io</span>
                                    </li>
                                    <li className="project--woto__framework__list__item">
                                        <span className="project--woto__framework__list__item__key">Currency</span>
                                        <span className="project--woto__framework__list__item__value">Currencylayer API</span>
                                    </li>
                                    <li className="project--woto__framework__list__item">
                                        <span className="project--woto__framework__list__item__key">Authentication</span>
                                        <span className="project--woto__framework__list__item__value">Yes</span>
                                    </li>
                                    <li className="project--woto__framework__list__item">
                                        <span className="project--woto__framework__list__item__key">Charts</span>
                                        <span className="project--woto__framework__list__item__value">react-chartjs-2</span>
                                    </li>

                                    
                                </ul>

                                <a className="project__info__cta"
                                onClick={() => window.open('https://trimmo-real-estate.web.app/')}
                                >
                                <IconSvg icon="launch"/>
                                <span>Launch Demo</span>
                            </a>
                            </div>
                           
                        </div>
                        
                        
                    </div>
                    <div className="project">

                        <div className="project__info">
                            <h1 className="project__info__title">Trimmo Real Estate</h1>
                            <p className="project__info__desc">
                                Woto was my first real project, and by far the most complete and complex. Woto is a car dealership built by a friend of mine. In order to help his business, all by myself I created all the necessary tools: the customer portal allowing users to consult the vehicles as well as a back office allowing a given administrator to manipulate all the data without coding. 
                            </p>

                            <div className="project__info__framework">
                                <h2 className="project__info__framework__title">Framework and Features</h2>
                                <ul className="project__info__framework__list">
                                    <li className="project__info__framework__list__item">
                                        React & Redux
                                    </li>
                                    <li className="project__info__framework__list__item">
                                        Google Map API
                                    </li>
                                    <li className="project__info__framework__list__item">
                                        Filters
                                    </li>
                                </ul>
                            </div>

                            <a className="project__info__cta"
                                onClick={() => window.open('https://trimmo-real-estate.web.app/')}
                            >
                                <IconSvg icon="launch" />
                                <span>Launch Demo</span>
                            </a>
                        </div>
                        <div className="project__img">
                            <Phone image="trimmo" openProject={() => window.open('https://trimmo-real-estate.web.app/')}></Phone>
                        </div>
                        
                    </div>


                    <div className="project">

                       <div className="project__info">
                            <h1 className="project__info__title">Triano Restaurant</h1>
                            <p className="project__info__desc">
                                Woto was my first real project, and by far the most complete and complex. Woto is a car dealership built by a friend of mine. In order to help his business, all by myself I created all the necessary tools: the customer portal allowing users to consult the vehicles as well as a back office allowing a given administrator to manipulate all the data without coding. 
                            </p>
                            <div className="project__info__framework">
                                <h2 className="project__info__framework__title">Framework and Features</h2>
                                <ul className="project__info__framework__list">
                                    <li className="project__info__framework__list__item">
                                        React & Redux
                                    </li>
                                </ul>
                            </div>
                            <a className="project__info__cta"
                                onClick={() => window.open('https://triano-restaurant.web.app/')}
                            >
                                <IconSvg icon="launch"/>
                                <span>Launch Demo</span>
                            </a>
                        </div>
                        <div className="project__img">
                            <Phone image="triano" openProject={() => window.open('https://triano-restaurant.web.app/')}></Phone>
                        </div>
                    </div>


                    <div className="project">
                    <div className="project__info">
                            <h1 className="project__info__title">Weather Finder</h1>
                            <p className="project__info__desc">
                                Woto was my first real project, and by far the most complete and complex. Woto is a car dealership built by a friend of mine. In order to help his business, all by myself I created all the necessary tools: the customer portal allowing users to consult the vehicles as well as a back office allowing a given administrator to manipulate all the data without coding. 
                            </p>

                            <div className="project__info__framework">
                                <h2 className="project__info__framework__title">Framework and Features</h2>
                                <ul className="project__info__framework__list">
                                    <li className="project__info__framework__list__item">
                                        React & Redux
                                    </li>
                                    <li className="project__info__framework__list__item">
                                        Open Weather
                                    </li>
                                    <li className="project__info__framework__list__item">
                                        Search for any city
                                    </li>
                                </ul>
                            </div>
                            <a className="project__info__cta"
                                onClick={() => window.open("https://weather-finder-anja.firebaseapp.com/")}
                            >
                                <IconSvg icon="launch"/>
                                <span>Launch Demo</span>
                            </a>
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