import React from 'react';
import classes from './Preview.module.css';
import previewImage from '../../assets/images/Preview.svg';

const Preview = () => {
    return (
        <img
            src={previewImage}
            alt="Weather App Icon"
            className={classes.Preview}
        />
    );
};

export default Preview;
