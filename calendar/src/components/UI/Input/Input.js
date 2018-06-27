import React from 'react';

///////////////////////////////////////////////////////////
// The App structure is according to:                    //
//                                                       //
//     Maximilian Schwarzmüller                          //
//                                                       //
// https://www.udemy.com/user/maximilian-schwarzmuller/  //
///////////////////////////////////////////////////////////

import classes from './Input.css';

const input = (props) => {

  return (

    <div className={classes.Input} >
      <label 
          className={classes.Label} 
          style={{textTransform: 'capitalize'}} >{props.label}</label>
      <input 
          type='text'
          className={classes.InputElement}
          onChange={props.changed}         
          value={props.value}  
           />
    </div>

  );

};

export default input;