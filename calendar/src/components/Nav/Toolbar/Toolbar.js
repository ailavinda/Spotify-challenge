import React from 'react';

///////////////////////////////////////////////////////////
// The App structure is according to:                    //
//                                                       //
//     Maximilian Schwarzmüller                          //
//                                                       //
// https://www.udemy.com/user/maximilian-schwarzmuller/  //
///////////////////////////////////////////////////////////

import classes from './Toolbar.css';

import Logo from '../../Logo/Logo';

import NavItems from '../NavItems/NavItems';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';



const toolbar = (props) => (

  <header className={classes.Toolbar} >

    <DrawerToggle clicked={props.drawerToggleClicked} />

    <div className={classes.Logo} >
      <Logo />
    </div>

    <nav className={classes.DesktopOnly} >
      <NavItems />
    </nav>

  </header>

);

export default toolbar;