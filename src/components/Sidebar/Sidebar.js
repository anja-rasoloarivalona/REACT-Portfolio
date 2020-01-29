import React from 'react'
import './Sidebar.css';
import IconSvg from '../../utilities/svg/svg';
import { NavLink} from 'react-router-dom';

const Sidebar = () => {
    let navigationItems = [
        {
            nav: 'about me',
            icon: 'user',
            path: '/'
        },
        {
            nav: 'projects',
            icon: 'briefcase',
            path: '/projects'
        },
        {
            nav: 'skills',
            icon: 'cogs',
            path: '/skills'
        },
        {
            nav: 'contact',
            icon: 'chat',
            path: '/contact'
        },

    ]

    return (
        <div className="sidebar">    
            <div className="sidebar__body">
                <ul className="sidebar__list">
                    {navigationItems.map( (item, index) => (
                        <NavLink className={`sidebar__list__item`}
                                key={index}
                                to={item.path}
                                exact
                        >
                            <div className="sidebar__list__item__info">
                                <IconSvg icon={item.icon}/>
                                <span>{item.nav}</span>
                            </div>


                        </NavLink>
                    ))
                    }
                </ul>

                <div className="sidebar__socialMedia">
                    <ul className="sidebar__socialMedia__list">
                        <li className="sidebar__socialMedia__list__item">
                            <IconSvg icon="github"/>
                        </li>
                        <li className="sidebar__socialMedia__list__item">
                            <IconSvg icon="linkedin"/>
                        </li>
                    </ul>
                </div>
            </div>

            
        </div>
    )
}


export default Sidebar
