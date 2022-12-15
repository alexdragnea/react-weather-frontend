import React from 'react';

import classes from './Humidity.module.css';

const humidity = (props) => {
    return (
        <div className={classes.DescriptionWrapper}>
            {props.type}
        </div>
    );
}

export default humidity;