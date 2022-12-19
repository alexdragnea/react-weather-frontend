import React from 'react';

import classes from './Pressure.module.css';

const pressure = (props) => {
    return (
        <div className={classes.PressureWrapper}>

            <span STYLE="font-size:18.0pt" >Pressure: </span>{props.type}
            <span STYLE="font-size:15.0pt"> <strong>hPa</strong></span>
        </div>
    );
}

export default pressure;