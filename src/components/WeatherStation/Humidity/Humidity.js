import React from 'react';

import classes from './Humidity.module.css';

const humidity = (props) => {
    return (
        <div className={classes.DescriptionWrapper}>

            <span STYLE="font-size:18.0pt" >Humidity:</span> {props.type}
            <span STYLE="font-size:15.0pt"> <strong>%</strong></span>
        </div>
    );
}

export default humidity;