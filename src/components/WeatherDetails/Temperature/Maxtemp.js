import React from 'react';

import classes from './Maxtemp.module.css';

const maxtemp = (props) => {
    return (
        <div className={classes.MaxtempWrapper}>
            {Math.round(props.degrees)}<span className={classes.TemperatureSymbol}>°</span>
        </div>
    );
}

export default maxtemp;