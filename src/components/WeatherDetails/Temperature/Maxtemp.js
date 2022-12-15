import React from 'react';

import classes from './Maxtemp.module.css';

const maxtemp = (props) => {
    return (
        <div className={classes.MaxtempWrapper}>
            <span STYLE="font-size:15.0pt" >Max. Temp: </span>{props.type}{Math.round(props.degrees)}<span className={classes.TemperatureSymbol}>°</span>
        </div>
    );
}

export default maxtemp;