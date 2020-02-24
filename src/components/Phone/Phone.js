import React from 'react';
import './Phone.css';

const Phone = props => {

    return (
        <div className="phone">
            <div className="phone__top">
                <div className="phone__top__circle"></div>
                <div className="phone__top__bar"></div>
            </div>
            <div className={`phone__screen phone__screen--${props.image}`}></div>
            <div className="phone__bottom">
                <div className="phone__bottom__btn"></div>
            </div>
        </div>
    )
}

export default Phone