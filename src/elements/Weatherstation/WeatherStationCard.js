import React from 'react'

import classes from './WeatherStationCard.css';

const weatherStationCard = (props) => {
    return(
        <div className={classes.Weatherstation}>
            {props.children}
        </div>
    );
}

export default weatherStationCard;