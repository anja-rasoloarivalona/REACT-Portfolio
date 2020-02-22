import React, { Component } from 'react'
import './About.css';
import Button from '../../components/Button/Button';

class About extends Component {
    render() {
            return (
                <div className="aboutContainer">  
                    <div className="about">
                        <h3 className="about__sub-title">
                            Hello, my name is Anja Rasoloarivalona
                        </h3>
                        <h1 className="about__main-title">I'm a Developer</h1>
                        <p>
                        After graduating from HEC Montreal with a bachelor's degree in business administration, with a mixed specialty in information technology and finance, I developed a great passion for programming. 
                        </p>
                        <div className="about__cta">
                            <Button color="grey"
                                    onClick={() => this.props.history.push('/portfolio')}
                            >
                                Portfolio
                            </Button>
                            <Button color="grey"
                                onClick={() => this.props.history.push('/contact')}
                            >
                                contact
                            </Button>
                        </div>
                    </div> 
                </div>
            )
        
    }
}


export default About; 