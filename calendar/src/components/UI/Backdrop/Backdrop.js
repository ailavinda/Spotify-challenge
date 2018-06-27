import React from 'react';

///////////////////////////////////////////////////////////
// The App structure is according to:                    //
//                                                       //
//     Maximilian Schwarzmüller                          //
//                                                       //
// https://www.udemy.com/user/maximilian-schwarzmuller/  //
///////////////////////////////////////////////////////////

import classes from './Backdrop.css';

// Use "backdrop" to add ability
// to remove "modal" upon clicking on it...

const backdrop = (props) => (
  props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;