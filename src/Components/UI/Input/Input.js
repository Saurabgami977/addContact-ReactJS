import React from 'react'

import classes from './Input.module.css';

function Input(props) {
    return (
        <div>
            <input
                className={classes.Input}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.change}
            />
        </div>
    )
}

export default Input
