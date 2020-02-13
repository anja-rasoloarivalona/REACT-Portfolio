import React from 'react';
import './Input.css';

const Input = props => {
    return (
        <div className={`input ${props.className}`}>
            {/*-------INPUT VARIATION--------*/}

            {/*-----BASIC INPUT--------*/}
            {
                props.control === 'input' && (
                    <input className="input__field"
                        type={props.type} //text, email, password...
                        id={props.id}
                        name={props.name}
                        required={props.required}
                        value={props.value}
                        placeholder={props.placeholder}
                        autoComplete={props.autoComplete}
                        onChange={e => props.onChange(props._id, e.target.value, props.formType)}
                    />
                )
            }

            {/*----TEXTAREA INPUT--------*/}
            {
                props.control === 'textarea' && (
                    <textarea className="textarea"
                        id={props.id}
                        name={props.name}
                        required={props.required}
                        value={props.value}
                        placeholder={props.placeholder}
                        onChange={e => props.onChange(props._id, e.target.value)}
                    />
                )
            }

            {
                props.control === 'select' && (
                    <select id={props.id}
                        required={props.required}
                        name={props.name}
                        onChange={e => props.onChange(props._id, e.target.value)}
                        value={props.value}>

                        {
                            props.options.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))
                        }
                    </select>
                )
            }

            {/*--------INPUT LABEL-----------*/}
            {
                props.label && (
                    <label htmlFor={props.id} className="input__label">{props.label}</label>
                )
            }
            {
                props.border && (
                    <div className="input__border"></div>
                )
            }
        </div>
    )
}

export default Input;