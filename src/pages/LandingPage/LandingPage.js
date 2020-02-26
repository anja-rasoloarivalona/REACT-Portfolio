import React, { Component } from 'react';
import './LandingPage.css';
import Button from '../../components/Button/Button';
import { FormattedMessage } from 'react-intl'

class LandingPage extends Component {

    counter = 0;
    name = ['A','n','j','a',' ','R','a','s','o','l','o','a','r','i','v','a','l','o','n','a']
    state = {
        mounted: false,
        started: false
    }

    componentDidMount(){
       this.setState({ mounted: true})
    }

    getStartedHandler = () => {
        this.props.getStartedHandler()
        this.setState({ started: true})
    }

    render() {
        const { mounted, started} = this.state;
    
        return (

            <div className={`landing-page ${mounted ? 'mounted': ''} ${started ? 'started': ''}`}>
                <div className="landing-page__text">
                    <FormattedMessage id="hiMyNameIs" defaultMessage="Hi, my name is"/>
                </div>                       
                <div className="landing-page__header">
                        <div className="landing-page__header__name">
                            {this.name.map( (i, index) => {
                               let output;
                                if(i === 'A'  || i === 'a'){                             
                                    this.counter = this.counter + .7
                                    output = (
                                    <div key={index} className={`landing-page__header__name__letterContainer ${i === 'A' ? 'main': 'secondary'}`}>
                                            <div className="landing-page__header__name__blank"
                                                 style={{ animationDelay:`${this.counter * .2}s`}}>
                                                _
                                            </div>
                                            <div className="landing-page__header__name__letter landing-page__header__name__letter--guess"
                                                 style={{ animationDelay:`${this.counter * .2}s`}}
                                            >
                                                {i}
                                            </div>
                                    </div>
                                    )                                    
                                }
                                if(i !== 'A' && i !== 'a' && i !== ' '){
                                    output = (
                                        <div key={index} className={`landing-page__header__name__letterContainer ${i === 'R' ? 'main':'secondary'}`}>
                                            <div className="landing-page__header__name__letter">{i}</div>
                                        </div>
                                    )                                     
                                }                                
                                if(i === ' '){
                                    output = <span key={index} className="landing-page__header__name__spacer"></span>   
                                }
                                return output                     
                        })}
                        </div>                    
                </div>
                <Button color="secondary"
                onClick={this.getStartedHandler}>
                       <FormattedMessage id="getStarted" defaultMessage="Get Started"/>
                </Button>
            </div>
            
        )
    }
}

export default  LandingPage