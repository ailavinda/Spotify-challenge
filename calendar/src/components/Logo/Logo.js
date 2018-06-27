import React from 'react';

///////////////////////////////////////////////////////////
// The App structure is according to:                    //
//                                                       //
//     Maximilian Schwarzmüller                          //
//                                                       //
// https://www.udemy.com/user/maximilian-schwarzmuller/  //
///////////////////////////////////////////////////////////


// https://upload.wikimedia.org/wikipedia/commons/e/e9/Google_Calendar.png...

import burgerLogo from '../../assets/images/Google_Calendar.png';

import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}} >
    <img src={burgerLogo} alt="MyCalendar" />
  </div>
);

export default logo;