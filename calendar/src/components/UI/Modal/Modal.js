import React, { Component } from 'react';

///////////////////////////////////////////////////////////
// The App structure is according to:                    //
//                                                       //
//     Maximilian Schwarzmüller                          //
//                                                       //
// https://www.udemy.com/user/maximilian-schwarzmuller/  //
///////////////////////////////////////////////////////////

import classes from './Modal.css';

// Need "Aux" for wrapping "Modal" in 
// order to use "Backdrop"...
import Aux from '../../../hoc/Aux/Aux';

import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {

    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }
 
  render () {
    return (

      <Aux>

        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />

        <div 
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>

          {this.props.children}

        </div>

      </Aux>
    );
  }

}

export default Modal;