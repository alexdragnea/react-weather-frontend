import classes from "../WeatherStation/WeatherDetails.module.css";
import Humidity from "../WeatherStation/Humidity/Humidity";
import Pressure from "../WeatherStation/Pressure/Pressure";
import Temperature from "../WeatherStation/Temperature/Temperature";
import Date from '../WeatherStation/Date/Date'
import React from "react";

const weatherStationDetails = (props) => {
    return (
        <div className={classes.WeatherDetailsWrapper}>
            <div className={classes.WeatherDataWrapper}>
                <Temperature degrees={props.data.station_temp}/>
                <Humidity type={props.data.station_humidity}/>
                <Pressure type={props.data.station_pressure}/>
                <Date type={props.data.station_date}/>
            </div>
        </div>
    );
}

export default weatherStationDetails;