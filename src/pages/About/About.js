import React, { Component } from 'react'
import './About.css';
import Button from '../../components/Button/Button';
import {FormattedMessage } from 'react-intl';

class About extends Component {
    componentDidMount(){
        console.log('mounted');
        
    }
    render() {
            return (
                <div className="aboutContainer">  
                    <div className="about">
                        <h3 className="about__sub-title">
                            <FormattedMessage id="helloMyName" defaultMessage=" Hello, my name is Anja Rasoloarivalona"/>
                        </h3>
                        <h1 className="about__main-title"><FormattedMessage id="imADeveloper" defaultMessage="I'm a Developer"/> </h1>
                        <p>
                            <FormattedMessage id="afterGraduating" defaultMessage="After graduating from HEC Montreal with a bachelor's degree in business administration, with a mixed specialty in information technology and finance, I developed a great passion for programming."/>
                        </p>
                        <div className="about__cta">
                            <Button color="grey"
                                    onClick={() => this.props.history.push('/projects')}
                            >
                                <FormattedMessage id="projects" defaultMessage="projects"/>
                            </Button>
                            <Button color="grey"
                                onClick={() => this.props.history.push('/contact')}
                            >
                                <FormattedMessage id="contact" defaultMessage="contact"/>
                            </Button>
                        </div>
                    </div> 
                </div>
            )
        
    }
}


export default About; 