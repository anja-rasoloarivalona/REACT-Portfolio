import React, { Component } from 'react'
import './Home.css';
import Button from '../../components/Button/Button';

class Home extends Component {

    state = {
        triggerAnimation1: false,
        triggerAnimation2: false
    }

    componentDidMount(){
        let sectionsPos = {};

        let positionsData = {
            home : this.home.offsetTop,
            about : this.about.offsetTop,
            portfolio: this.portfolio.offsetTop,
            skills: this.skills.offsetTop,
            contact: this.contact.offsetTop
        }

        let sectionsName = Object.keys(positionsData);

        sectionsName.forEach( (pos, index) => {
            let nextSection = `${sectionsName[index + 1]}`;
              sectionsPos = {
                ...sectionsPos,
                [pos] : {
                  min: positionsData[pos],
                  max: positionsData[nextSection] || positionsData[pos]
                }
              }
           })
        this.props.setSectionsPos(sectionsPos);
       this.animationHandler()
    }

    animationHandler = () => {
        setTimeout(
            () => {
                this.setState({triggerAnimation1: true})
            }, 3000
        )

        setTimeout(
            () => {
                this.setState({triggerAnimation1: false, triggerAnimation2: true})
            }, 6000
        )
    }

    render() {
        const {triggerAnimation1, triggerAnimation2} = this.state;
        const currentLanguage = this.props.language;
        console.log('home', currentLanguage)

            return (
                <div className="home">   

                    <section className="home__section"
                            ref={ el => this.home = el}>
                        
                        <div className="language">

                            <div className="language__option language__option--fr">
                                <div className="language__option__name">
                                    FR
                                </div>
                                <div className={`language__option__status ${currentLanguage === 'fr' ? 'active' : ''}`}>
                                </div>
                            </div>

                            <div className={`language__switch ${currentLanguage === 'fr' ? 'fr' : 'en'}`}
                                 onClick={this.props.toggleLanguageHandler}>
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
                        <div className="home__section__subtitle">
                            Hello, my name is Anja Rasoloarivalona
                        </div>
                        <div className={`home__section__title 
                                        ${triggerAnimation1  ? 'anim1': ''}
                                        ${triggerAnimation2  ? 'anim2': ''}`}>
                            
                            
                            <div className="home__section__title__container">
                                <span className="home__section__title__main">I'm a </span>
                                <div  className="home__section__title__secondary">
                                    <span className="home__section__title__secondary--1">Developer</span>
                                    <span className="home__section__title__secondary--2">Business Analyst</span>
                                </div>
                                
                            </div>


                            <div className="home__section__title__writter__container">
                                <div className="home__section__title__writter"></div>
                                <div className="home__section__title__writter__hidder"></div>
                            </div>
                            
                        </div>
                        <p className="home__section__para">
                            I am passionate about creating elegant, unique and functional websites and applications. If you have something in mind, feel free to contact me! In the meantime, enjoy your little ride in my portfolio.
                        </p>
                        <div className="home__section__cta">
                            <Button color="grey">
                                Portfolio
                            </Button>
                            <Button color="grey">
                                Hire me
                            </Button>
                        </div>
                    </section>
                    <section className="home__section"
                            ref={ el => this.about = el}>
                        About
                    </section>
                    <section className="home__section home__section--red"
                            ref={ el => this.portfolio = el}>
                        Portfolio
                    </section>
                    <section className="home__section home__section--green"
                            ref={ el => this.skills = el}>
                        Skills
                    </section>
                    <section className="home__section home__section--salmon"
                            ref={ el => this.contact = el}>
                        Contact
                    </section>
                </div>
            )
        
    }
}


export default Home; 