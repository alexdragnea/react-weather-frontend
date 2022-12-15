import React from 'react';

import classes from './Feelslike.module.css';

const feelslike = (props) => {
    return (
        <div className={classes.FeelslikeWrapper}>
            <span STYLE="font-size:15.0pt" >Feels like: </span>{props.type}{Math.round(props.degrees)}<span className={classes.TemperatureSymbol}>°</span>
        </div>
    );
}

export default feelslike;