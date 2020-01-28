import React from 'react';
import sprite from '../../assets/sprite.svg'

const svg = props => {
    return (
        <svg 
            viewBox='0 0 16 16' 
            onClick={props.onClick}
            className={`icon icon-${props.icon} ${props.size} ${props.customClass}`}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">

            <use xlinkHref={`${sprite}#icon-${props.icon}`} />
        </svg>
    )
}

export default svg;