import React from 'react';

import classes from './Feelslike.module.css';

const feelslike = (props) => {
    return (
        <div className={classes.FeelslikeWrapper}>
            {Math.round(props.degrees)}<span className={classes.TemperatureSymbol}>°</span>
        </div>
    );
}

export default feelslike;