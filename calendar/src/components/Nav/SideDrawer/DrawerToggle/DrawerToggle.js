import React from 'react';

///////////////////////////////////////////////////////////
// The App structure is according to:                    //
//                                                       //
//     Maximilian Schwarzmüller                          //
//                                                       //
// https://www.udemy.com/user/maximilian-schwarzmuller/  //
///////////////////////////////////////////////////////////

// "hamburger"-icon by Max...

import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked} >
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;