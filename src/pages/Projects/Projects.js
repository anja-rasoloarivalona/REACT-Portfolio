import React, { Component } from 'react'
import './Projects.css';
import Phone from '../../components/Phone/Phone';
import IconSvg from "../../utilities/svg/svg";

class Projects extends Component {

    state = {
        display: 'list'
    }


    render() {       
            return (
                <div className="projects">  

                    {/* <div className="project">
                        <h1 className="project__info__title">Woto motors</h1>
                        <p className="project__info__desc">
                            Woto was my first real project, and by far the most complete and complex. Woto is a car dealership built by a friend of mine. In order to help his business, all by myself I created all the necessary tools: the customer portal allowing users to consult the vehicles as well as a back office allowing a given administrator to manipulate all the data without coding. 
                        </p>
                        
                    </div> */}
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
                                <IconSvg icon="launch"/>
                                <span>Launch Demo</span>
                            </a>
                        </div>
                        <div className="project__img">
                            <Phone image="trimmo"></Phone>
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
                            <Phone image="triano"></Phone>
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
                            <Phone image="weather"></Phone>
                        </div>
                    </div>

                   
                </div>
            )
        
    }
}


export default Projects; 