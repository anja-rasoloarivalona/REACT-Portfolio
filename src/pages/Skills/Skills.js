import React, { Component } from 'react'
import './Skills.css';

class Skills extends Component {
    render() {  
    return (
        <section class="skills">
            <h1 class="skills__title">My Skills</h1>
            <div class="skills__wrapper">
                <div class="skills__container skills__container--front">
                    <h1 class="skills__container__title">Front-End</h1>

                    <div class="skills__container__draw">
                        <div class=" skills__container__draw--front skills__container__draw--front__1"></div>
                        <div class="skills__container__draw--front skills__container__draw--front__2"></div>
                        <div class="skills__container__draw--front skills__container__draw--front__3"></div>
                    </div>
                    <ul class="skills__container__list">
                        <li class="skills__container__list__item">HTML5</li>
                        <li class="skills__container__list__item">ES6</li>
                        <li class="skills__container__list__item">jQuery</li>
                        <li class="skills__container__list__item">React & Redux</li>
                        <li class="skills__container__list__item">CSS3 & Sass</li>
                        <li class="skills__container__list__item">Bootstrap4</li>
                        <li class="skills__container__list__item">Git</li>
                        <li class="skills__container__list__item">Gulp</li>
                    </ul>
                </div>
                <div class="skills__container skills__container--back">
                    <h1 class="skills__container__title">Back-End</h1>
                    <div class="skills__container__draw">
                        <div class="skills__container__draw--back skills__container__draw--back__1"></div>
                        <div class=" skills__container__draw--back skills__container__draw--back__2"></div>
                        <div class=" skills__container__draw--back skills__container__draw--back__3"></div>
                        <div class=" skills__container__draw--back skills__container__draw--back__4"></div>
                    </div>
                    <ul class="skills__container__list">
                        <li class="skills__container__list__item">Node.js</li>
                        <li class="skills__container__list__item">Express.js</li>
                        <li class="skills__container__list__item">MongoDB</li>
                        <li class="skills__container__list__item">MySQL</li>
                        <li class="skills__container__list__item">REST API</li>
                        <li class="skills__container__list__item">MongoDB</li>
                    </ul>
                </div>
                <div class="skills__container skills__container--business">
                    <div class="skills__container__draw skills__container__draw__business">
                        <div class="skills__container__draw--business skills__container__draw--business__1"></div>
                        <div class="skills__container__draw--business skills__container__draw--business__2"></div>
                        <div class="skills__container__draw--business skills__container__draw--business__3"></div>

                    </div>
                    <h1 class="skills__container__title">Business</h1>
                    <ul class="skills__container__list">
                        <li class="skills__container__list__item">Business Process Management</li>
                        <li class="skills__container__list__item">IT Project Management</li>
                        <li class="skills__container__list__item">Data analysis</li>
                        <li class="skills__container__list__item">Financial Analysis</li>
                    </ul>
                </div>
            </div>
        </section>
            )
        
    }
}


export default Skills; 