import React, { Component } from 'react'
import './Contact.css';
import Input from '../../components/Input/Input';
import IconSvg from '../../utilities/svg/svg'

class Contact extends Component {

    state = {
        form : {
            name: {
                value: ''
            },
            email: {
                value: ''
            },
            company: {
                value: ''
            },
            phoneNumber: {
                value: ""
            },
            message: ''
        }
    }

    onChangeInput = (input, value) => {
        this.setState(prevState => ({
            ...prevState,
            form: {
                ...prevState.form,
                [input]: value
            }
        }))
    }
    render() {
            const {form} = this.state;

            return (
                <div className="contactContainer">  
                      <header className="contact__header">
                            <h1 className="contact__header__title">Get in touch</h1>
                      </header>
                     <form action="https://formspree.io/rasoloanja@gmail.com" method="POST" class="contact__form">
                                <div class="contact__form__group">
                                    <Input
                                        control="input"
                                        label="name"
                                        type="text"                                  
                                        id= "name"
                                        _id= "name"
                                        name="name"
                                        placeholder="name"
                                        value = {form.name.value}
                                        onChange={this.onChangeInput}
                                        required={true}
                                    />
                                    <Input
                                        control="input"
                                        label="email"
                                        type="email"
                                        _id="email"                                  
                                        id= "name"
                                        name="name"
                                        placeholder="email"
                                        value = {form.email.value}
                                        onChange={this.onChangeInput}
                                    />
                                </div>
                                <div class="contact__form__group">
                                      <Input
                                            control="input"
                                            label="company"
                                            type="text"                                  
                                            id= "name"
                                            _id="company"
                                            name="name"
                                            placeholder="company"
                                            value = {form.company.value}
                                            onChange={this.onChangeInput}
                                        />
                                        <Input
                                            control="input"
                                            label="phone number"
                                            type="text"                                  
                                            id= "name"
                                            _id="phoneNumber"
                                            name="name"
                                            placeholder="phone number"
                                            value = {form.phoneNumber.value}
                                            onChange={this.onChangeInput}
                                        />
                                </div>
                                        <Input
                                            control="textarea"
                                            label="message"
                                            type="text"                                  
                                            id= "name"
                                            _id="message"
                                            name="name"
                                            placeholder="message"
                                            value = {form.message.value}
                                            onChange={this.onChangeInput}
                                        />
                                
                            <input class="button button--primary" id="email-submit" type="submit" value="Send" />
                    </form>


          
                        <ul className="contact__infos-list">
                           <li className="conact__infos-list__item">
                                <div className="contact__infos-list__item__icon">
                                    <IconSvg icon="phone"/>
                                </div>
                                <span>+1 438 896 2026</span>
                           </li>
                           <li className="conact__infos-list__item">
                                <div className="contact__infos-list__item__icon">
                                    <IconSvg icon="mail"/>
                                </div>
                                <span>rasoloanja@gmail.com</span>
                           </li>
                           <li className="conact__infos-list__item">
                                <div className="contact__infos-list__item__icon">
                                    <IconSvg icon="pin"/>
                                </div>
                                <span>Montreal, H4A 2S7</span>
                           </li>
                        </ul>
                  
                </div>
            )
        
    }
}


export default Contact; 