import React from 'react';

import classes from './City.module.css';

const city = (props) => {
    return (
        <div className={classes.CityWrapper}>
            {props.type}
        </div>
    );
}

export default city;