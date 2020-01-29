import React from 'react'
import './Header.css'
const Header = props => {
    const currentLanguage = props.language
    return (
        <header className="header">
            <div className="header__profileContainer">
                <div className="header__profile">
                    <div className='header__profile__img'>
                        <div className="header__profile__status"></div>
                    </div> 
                    <div className="header__profile__name">Anja Rasoloarivalona</div>
                </div>
                
            </div>
            <div className="header__title">About me</div>

            <div className="header__languageContainer">
                <div className="language">
                    <div className="language__option language__option--fr">
                        <div className="language__option__name">
                            FR
                        </div>
                        <div className={`language__option__status ${currentLanguage === 'fr' ? 'active' : ''}`}>
                        </div>
                    </div>
                    <div className={`language__switch ${currentLanguage === 'fr' ? 'fr' : 'en'}`}
                                    onClick={props.toggleLanguageHandler}>
                        <div className="language__switch__btn">
                        </div>
                    </div>
                    <div className="language__option language__option--en">
                        <div className={`language__option__status ${currentLanguage === 'en' ? 'active' : ''}`}>
                        </div>
                        <div className="language__option__name">
                            EN
                        </div>               
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Header