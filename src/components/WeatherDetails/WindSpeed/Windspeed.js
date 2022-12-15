import React from 'react';

import classes from './Windspeed.module.css';

const windspeed = (props) => {
    return (
        <div className={classes.WindspeedWrapper}>
            <span STYLE="font-size:15.0pt" >Windspeed: </span>{props.type}
            <span STYLE="font-size:15.0pt"> <strong>m/s</strong></span>
        </div>
    );
}

export default windspeed;