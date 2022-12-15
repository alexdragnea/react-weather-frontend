import React from 'react';

import classes from './Windspeed.module.css';

const windspeed = (props) => {
    return (
        <div className={classes.WindspeedWrapper}>
            {props.type}
        </div>
    );
}

export default windspeed;