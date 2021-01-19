import React from 'react';

import classes from './Button.module.css'

function Button(props) {
    return (
        <div>
            <button className={classes[props.class]}>{props.children}</button>
        </div >
    )
}

export default Button
