import React from 'react';

import classes from './Pressure.module.css';

const pressure = (props) => {
    return (
        <div className={classes.PressureWrapper}>
            {props.type}
        </div>
    );
}

export default pressure;