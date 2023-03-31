import React from 'react';

import classes from './Footer.module.css';

const footer = (props) => {
    return (
        <footer className={classes.Footer} style={{ backgroundColor: props.color }}>
            <div className="">
                <div className="del-header">
                    <div className="container">
                        <h4 className="del-heading">
                            <div className="del-logo">

                            </div>
                        </h4>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;