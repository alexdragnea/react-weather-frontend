import React from 'react';

import classes from './Header.module.css';

const header = (props) => {
    return (
        <header className={classes.Header} style={{ backgroundColor: props.color }}>
            <div className="">
                <div className="del-header">
                    <div className="container">
                        <h1 className="del-heading">
                            <div className="del-logo">

                                Weather <span className="highlight">App </span>

                            </div>

                        </h1>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default header;