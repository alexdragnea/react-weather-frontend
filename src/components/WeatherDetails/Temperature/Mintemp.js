import React from 'react';

import classes from './Mintemp.module.css';

const mintemp = (props) => {
    return (
        <div className={classes.MintempWrapper}>
            <span STYLE="font-size:15.0pt" >Min. Temp: </span>{props.type}{Math.round(props.degrees)}<span className={classes.TemperatureSymbol}>°</span>
        </div>
    );
}

export default mintemp;