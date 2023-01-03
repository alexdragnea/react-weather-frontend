import React from 'react';

import classes from './Temperature.module.css';

const temperature = (props) => {
    return (
        <div className={classes.TemperatureWrapper}>
            <span STYLE="font-size:18.0pt" >Temperature: </span>
            {Math.round(props.degrees)}<span className={classes.TemperatureSymbol}> °C </span>
        </div>
    );
}

export default temperature;