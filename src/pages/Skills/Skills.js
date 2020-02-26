import React, { Component } from 'react'
import './Skills.css';
import { FormattedMessage } from 'react-intl'

class Skills extends Component {
    render() {  
    return (
        <section className="skills">
            <h1 className="skills__title"><FormattedMessage id="mySkills" defaultMessage="My skills"/></h1>
            <div className="skills__wrapper">
                <div className="skills__container skills__container--front">
                    <h1 className="skills__container__title">Front-End</h1>

                    <div className="skills__container__draw">
                        <div className=" skills__container__draw--front skills__container__draw--front__1"></div>
                        <div className="skills__container__draw--front skills__container__draw--front__2"></div>
                        <div className="skills__container__draw--front skills__container__draw--front__3"></div>
                    </div>
                    <ul className="skills__container__list">
                        <li className="skills__container__list__item">HTML5</li>
                        <li className="skills__container__list__item">ES6</li>
                        <li className="skills__container__list__item">jQuery</li>
                        <li className="skills__container__list__item">React & Redux</li>
                        <li className="skills__container__list__item">React Native</li>
                        <li className="skills__container__list__item">CSS3 & Sass</li>
                        <li className="skills__container__list__item">Bootstrap4</li>
                        <li className="skills__container__list__item">Git</li>
                        <li className="skills__container__list__item">Gulp</li>
                    </ul>
                </div>
                <div className="skills__container skills__container--back">
                    <h1 className="skills__container__title">Back-End</h1>
                    <div className="skills__container__draw">
                        <div className="skills__container__draw--back skills__container__draw--back__1"></div>
                        <div className=" skills__container__draw--back skills__container__draw--back__2"></div>
                        <div className=" skills__container__draw--back skills__container__draw--back__3"></div>
                        <div className=" skills__container__draw--back skills__container__draw--back__4"></div>
                    </div>
                    <ul className="skills__container__list">
                        <li className="skills__container__list__item">Node.js</li>
                        <li className="skills__container__list__item">Express.js</li>
                        <li className="skills__container__list__item">MongoDB</li>
                        <li className="skills__container__list__item">MySQL</li>
                        <li className="skills__container__list__item">REST API</li>
                    </ul>
                </div>
                <div className="skills__container skills__container--business">
                    <div className="skills__container__draw skills__container__draw__business">
                        <div className="skills__container__draw--business skills__container__draw--business__1"></div>
                        <div className="skills__container__draw--business skills__container__draw--business__2"></div>
                        <div className="skills__container__draw--business skills__container__draw--business__3"></div>

                    </div>
                    <h1 className="skills__container__title">Business</h1>
                    <ul className="skills__container__list">
                        <li className="skills__container__list__item">Business Process Management</li>
                        <li className="skills__container__list__item">IT Project Management</li>
                        <li className="skills__container__list__item">Data analysis</li>
                        <li className="skills__container__list__item">Financial Analysis</li>
                    </ul>
                </div>
            </div>
        </section>
            )
        
    }
}


export default Skills; 