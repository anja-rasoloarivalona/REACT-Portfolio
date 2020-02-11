import React, { Component } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import IconSvg from '../../utilities/svg/svg'

class Siderbar extends Component {
    render() {
        return (
            <div className="sidebar">
                <header className="sidebar__header">

                </header>
                <nav className="sidebar__nav">

                    <ul className="sidebar__nav__list">
                        <NavLink to="/" exact>
                            <div className="sidebar__nav__list__item">
                                <IconSvg icon="user"/>
                                <span>about me</span>
                            </div> 
                            <div className="sidebar__nav__list__item__design sidebar__nav__list__item__design--top">
                                <div className="sidebar__nav__list__item__design__inner"></div>
                            </div>
                            <div className="sidebar__nav__list__item__design sidebar__nav__list__item__design--bottom">
                                <div className="sidebar__nav__list__item__design__inner"></div>
                            </div>
                        </NavLink>
                        <NavLink to="portfolio">
                            <div className="sidebar__nav__list__item">
                                <IconSvg icon="briefcase"/>
                                <span>portfolio</span>
                            </div>  
                            <div className="sidebar__nav__list__item__design sidebar__nav__list__item__design--top">
                                <div className="sidebar__nav__list__item__design__inner"></div>
                            </div>
                            <div className="sidebar__nav__list__item__design sidebar__nav__list__item__design--bottom">
                                <div className="sidebar__nav__list__item__design__inner"></div>
                            </div>
                        </NavLink>
                        <NavLink to="skills">
                            <div className="sidebar__nav__list__item">
                                <IconSvg icon="cogs"/>
                                <span>skills</span>
                            </div>    
                            <div className="sidebar__nav__list__item__design sidebar__nav__list__item__design--top">
                                <div className="sidebar__nav__list__item__design__inner"></div>
                            </div>
                            <div className="sidebar__nav__list__item__design sidebar__nav__list__item__design--bottom">
                                <div className="sidebar__nav__list__item__design__inner"></div>
                            </div>
                        </NavLink>
                        <NavLink to="contact">
                            <div className="sidebar__nav__list__item">
                                <IconSvg icon="chat"/>
                                <span>contact</span>
                            </div>
                            <div className="sidebar__nav__list__item__design sidebar__nav__list__item__design--top">
                                <div className="sidebar__nav__list__item__design__inner"></div>
                            </div>
                            <div className="sidebar__nav__list__item__design sidebar__nav__list__item__design--bottom">
                                <div className="sidebar__nav__list__item__design__inner"></div>
                            </div>
                        </NavLink>
                    </ul>
                    
                </nav>
            </div>
        )
    }
}

export default Siderbar
