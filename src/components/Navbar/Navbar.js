import React, { Component } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom'
import IconSvg from '../../utilities/svg/svg'
import DropDownList from '../DropDownList/DropDownList';
import { withRouter } from 'react-router-dom'


class Navbar extends Component {

    state = {
        showNavList: false,
    }

      selectLangHandler = fullLang => {
        this.setState({ showNavList: false}, () => this.props.selectLangHandler(fullLang))
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
        let fullLang = this.props.fullLang

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
                        <DropDownList 
                            selectItemHandler={this.selectLangHandler}
                            value={fullLang}
                        />
                        <div className="navbar__social">
                            <a href="https://www.linkedin.com/in/anja-rasoloarivalona" target="_blank" rel="noopener noreferrer">
                                <IconSvg icon="linkedin"/>
                            </a>
                             <a href="https://github.com/anja-rasoloarivalona" target="_blank" rel="noopener noreferrer">
                                <IconSvg icon="github"/>
                            </a>
                        </div>
                    </ul>

                    

                    
                </div>
            
                
            </div>
        )
    }
}


export default withRouter(Navbar) 
