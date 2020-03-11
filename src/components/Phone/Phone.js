import React from 'react';
import './Phone.css';
import IconSvg from '../../utilities/svg/svg';

const Phone = props => {

    return (
        <div className="phone">
            <div className="phone__top">
                <div className="phone__top__circle"></div>
                <div className="phone__top__bar"></div>
            </div>
            <div className={`phone__screen phone__screen--${props.image}`} onClick={props.openProject}>
                <div className='phone__screen__layer'>
                    <span>Click to launch demo</span>
                    <IconSvg icon="search"/>
                </div>
            </div>
            <div className="phone__bottom">
                <div className="phone__bottom__btn"></div>
            </div>
        </div>
    )
}

export default Phone