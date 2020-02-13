import React, { Component } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import IconSvg from '../../utilities/svg/svg'

class Siderbar extends Component {
    render() {
        const started = this.props.started
        return (
            <div className={`sidebar ${started ? 'started': ''}`}>
                <div className="sidebar__header">
                    <div className="sidebar__header__imgContainer">
                        <div className="sidebar__header__imgContainer__img"></div>
                        <div className="sidebar__header__imgContainer__status"></div>
                    </div>
                    <div className="sidebar__header__name">
                        Anja Rasoloarivalona
                    </div>
                </div>
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
                <div className="sidebar__social">
                    <div className="sidebar__social__icon">
                        <IconSvg icon="linkedin"/>
                    </div>
                    <div className="sidebar__social__icon">
                        <IconSvg icon="github"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Siderbar
