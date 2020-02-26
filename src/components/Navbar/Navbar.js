import React, { Component } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom'
import IconSvg from '../../utilities/svg/svg'

class Navbar extends Component {

    state = {
        showNavList: false
    }

    navListToggler = () => {
        this.setState(prevState => ({
            ...prevState,
            showNavList: !prevState.showNavList
        }))
    }
    render() {

        const { showNavList } = this.state;
        const started = this.props.started;

        return (
            <div className={`navbar ${started ? 'show':''}`}>
                <div className="navbar__toggler"
                    onClick={this.navListToggler}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="navbar__header">
                        <div className="navbar__header__imgContainer">
                            <div className="navbar__header__imgContainer__img"></div>
                            <div className="navbar__header__imgContainer__status"></div>
                        </div>
                        <div className="navbar__header__name">
                            Anja Rasoloarivalona
                        </div>
                </div>

                <div className={`navbar__listContainer ${showNavList ? 'show' : ''}`}>
                    <ul className="navbar__list">
                        <NavLink to="/" exact
                            onClick={this.navListToggler}
                        >
                            About me
                        </NavLink>
                        <NavLink to="projects"
                         onClick={this.navListToggler}>
                            Projects
                        </NavLink>
                        <NavLink to="skills"
                         onClick={this.navListToggler}>
                            Skills
                        </NavLink>
                        <NavLink to="contact"
                         onClick={this.navListToggler}>
                            Contact
                        </NavLink>

                        <div className="navbar__social">
                            <IconSvg icon="linkedin"/>
                            <IconSvg icon="github"/>
                        </div>
                    </ul>

                    
                </div>
            </div>
        )
    }
}


export default Navbar
