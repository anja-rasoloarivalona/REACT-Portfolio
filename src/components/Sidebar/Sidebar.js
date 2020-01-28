import React from 'react'
import './Sidebar.css';
import IconSvg from '../../utilities/svg/svg';



const Sidebar = props => {
    let activeSection = props.activeSection;
    let navigationItems = [
        {
            nav: 'home',
            icon: 'home'
        },
        {
            nav: 'about',
            icon: 'user'
        },
        {
            nav: 'portfolio',
            icon: 'briefcase'
        },
        {
            nav: 'skills',
            icon: 'cogs'
        },
        {
            nav: 'contact',
            icon: 'chat'
        },

    ]

    return (
        <div className="sidebar">    

            <div className="sidebar__head">

                <div className="sidebar__head__img">
                </div>
                 <div className="sidebar__head__name">
                    Anja Rasoloarivalona
                 </div>

                {
                    /**
                      
                    <div className="sidebar__head__title">
                        Developer & Business Analyst
                    </div>                  
                     */
                }
                
            </div>  

            <ul className="sidebar__list">
                {navigationItems.map( (item, index) => (
                    <li className={`sidebar__list__item
                        ${activeSection === item.nav ? 'active': ''}`}
                        key={index}>

                        <div className="sidebar__list__item__info">
                            <IconSvg icon={item.icon}/>
                            <span>{item.nav}</span>
                        </div>


                    </li>
                ))
                }
            </ul>

            <div className="sidebar__socialMedia">
                <ul className="sidebar__socialMedia__list">
                    <li className="sidebar__socialMedia__list__item">
                        <IconSvg />
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Sidebar
