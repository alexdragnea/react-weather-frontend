import React from 'react';

import classes from './WeatherDetails.module.css';
import Icon from '../../elements/Icon/Icon';
import Temperature from './Temperature/Temperature';
import Maxtemp from './Temperature/Maxtemp';
import Mintemp from './Temperature/Mintemp';
import Description from './Description/Description';
import City from './City/City';
import Pressure from './Pressure/Pressure';
import Windspeed from './WindSpeed/Windspeed';
import Humidity from './Humidity/Humidity';
import Feelslike from './Feelslike/Feelslike';
import Date from './Date/Date';



const weatherDetails = (props) => {
    return (
        <div className={classes.WeatherDetailsWrapper}>
            <div className={classes.WeatherIconWrapper}>
                <Icon type={props.data.description} />
            </div>
            <div className={classes.WeatherDataWrapper}>
                <City type={props.data.city} />
                <Description type={props.data.description} />
                <Feelslike degrees={props.data.feels_like} />
                <Maxtemp degrees={props.data.temp_max} />
                <Mintemp degrees={props.data.temp_min} />
                <Humidity type={props.data.humidity} />
                <Pressure type={props.data.pressure} />
                <Windspeed type={props.data.windspeed} />
                <Date />
                <Temperature degrees={props.data.temperature} />
            </div>
        </div >
    );
}

export default weatherDetails;