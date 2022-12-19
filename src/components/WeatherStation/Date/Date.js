import React from 'react';



import classes from './Date.module.css';

const date = (props) => {
    return(
        <div className={classes.DateWrapper}>
            <span STYLE="font-size:18.0pt" >Updated at: </span> {props.type}
        </div>
    );
}

export default date;