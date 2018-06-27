import React from 'react';

///////////////////////////////////////////////////////////
// The App structure is according to:                    //
//                                                       //
//     Maximilian Schwarzmüller                          //
//                                                       //
// https://www.udemy.com/user/maximilian-schwarzmuller/  //
///////////////////////////////////////////////////////////

// Each "li" with "a" requires own styling:
// <li><a href="/">A Link</a></li>...

import classes from './NavItems.css';

import NavItem from '../NavItem/NavItem';

const navItems = () => (

  <ul className={classes.NavItems} >

    <NavItem link="/" active >Calendar</NavItem>
    <NavItem link="/" >Close</NavItem>

  </ul>

);

export default navItems;