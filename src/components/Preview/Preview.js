import React from 'react';
import { ReactComponent as PreviewIcon } from '../../assets/images/Preview.svg';
import classes from './Preview.module.css';

const Preview = () => {
    return (
        <PreviewIcon className={classes.Preview} />
    );
};

export default Preview;