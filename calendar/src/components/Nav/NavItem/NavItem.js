import React from 'react';

///////////////////////////////////////////////////////////
// The App structure is according to:                    //
//                                                       //
//     Maximilian Schwarzmüller                          //
//                                                       //
// https://www.udemy.com/user/maximilian-schwarzmuller/  //
///////////////////////////////////////////////////////////

import classes from './NavItem.css';

// using "null" as a class name below - empty...


const navItem = (props) => (

  <li className={classes.NavItem} >
    <a 
      href={props.link}
      className={props.active ? classes.active : null } >{props.children}</a>
  </li>

);

export default navItem;