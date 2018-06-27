import React from 'react';

///////////////////////////////////////////////////////////
// The App structure is according to:                    //
//                                                       //
//     Maximilian Schwarzmüller                          //
//                                                       //
// https://www.udemy.com/user/maximilian-schwarzmuller/  //
/////////////////////////////////////////////////////////// 

import classes from './Button.css';


const button = (props) => (
  <button 
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked} >{props.children}</button>
);

export default button;