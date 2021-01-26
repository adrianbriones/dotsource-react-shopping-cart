import React from 'react';


import classes from './Logo.css';
import dotsourceLogo from '../../assets/images/dotSource-logo.png';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={dotsourceLogo} alt="dotSource Aufgabe" />
    </div>
);

export default logo;