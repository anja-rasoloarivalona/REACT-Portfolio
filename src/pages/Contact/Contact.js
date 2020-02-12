import React, { Component } from 'react'
import './Contact.css';

class Contact extends Component {
    render() {
        
            return (
                <div className="contactContainer">  
                    <div className="contact">Contact</div> 
                     <form action="https://formspree.io/rasoloanja@gmail.com" method="POST" class="form">
                            <div class="form__group">
                                <input type="text" class="form__input" placeholder="Name" id="name" name="name" required />
                                <label for="name" class="form__label">Name*</label>
                            </div>

                            <div class="form__group">
                                <input type="email" class="form__input" placeholder="Email" id="email" name="name" required />
                                <label for="email" class="form__label">Email*</label>
                            </div>

                            <div class="form__group">
                                <input type="text" class="form__input" placeholder="Company Name" id="company" name="name" required />
                                <label for="email" class="form__label">Company Name</label>
                            </div>

                            <div class="form__group">
                                <input type="text" class="form__input" placeholder="Phone" id="phone" name="name" required />
                                <label for="email" class="form__label">Phone*</label>
                            </div>

                            <div class="form__group form__group--message">
                                <textarea type="text" name="name" class="form__input" placeholder="Message" id="message"
                                    required></textarea>
                                <label for="message" class="form__label">Message*</label>
                            </div>
                            <input class="form__submit btn btn--blue" id="email-submit" type="submit" value="Send" />
                    </form>
                </div>
            )
        
    }
}


export default Contact; 