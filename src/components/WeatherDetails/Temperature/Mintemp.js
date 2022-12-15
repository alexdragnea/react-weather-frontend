import React from 'react';

import classes from './Mintemp.module.css';

const mintemp = (props) => {
    return (
        <div className={classes.MintempWrapper}>
            {Math.round(props.degrees)}<span className={classes.TemperatureSymbol}>°</span>
        </div>
    );
}

export default mintemp;