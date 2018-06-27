import React from 'react';

///////////////////////////////////////////////////////////
// The App structure is according to:                    //
//                                                       //
//     Maximilian Schwarzmüller                          //
//                                                       //
// https://www.udemy.com/user/maximilian-schwarzmuller/  //
///////////////////////////////////////////////////////////

// Search for CSS spinners on the web...

// https://projects.lukehaas.me/css-loaders/...

// Adjust, then copy css code from
// particular one... see Spinner.css...

// Will need "loading" state in Calendar...

import classes from './Spinner.css';

const spinner = () => (
  <div className={classes.Loader} >Loading...</div>
);

export default spinner;