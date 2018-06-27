import React, { Component } from 'react';

///////////////////////////////////////////////////////////
// The App structure is according to:                    //
//                                                       //
//     Maximilian Schwarzmüller                          //
//                                                       //
// https://www.udemy.com/user/maximilian-schwarzmuller/  //
///////////////////////////////////////////////////////////

import Aux from '../Aux/Aux';

import classes from './Layout.css';

import Toolbar from '../../components/Nav/Toolbar/Toolbar';

import SideDrawer from '../../components/Nav/SideDrawer/SideDrawer';


class Layout extends Component {

  state = {
    showSideDrawer: true
  }

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler = () => {
    this.setState(( prevState ) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render () {

    return (

      <Aux>

        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />

        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerCloseHandler} />

        <main className={classes.Content}>
          {this.props.children}
        </main>

      </Aux>
    )
  }
} 

export default Layout;