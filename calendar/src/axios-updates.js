import axios from 'axios';

///////////////////////////////////////////////////////////
// The App structure is according to:                    //
//                                                       //
//     Maximilian Schwarzmüller                          //
//                                                       //
// https://www.udemy.com/user/maximilian-schwarzmuller/  //
///////////////////////////////////////////////////////////

// New instance of axios for calendar app 
// with particular end point on:
// firebase.google.com...

// This is not a global instance...

const instance = axios.create({
  baseURL: 'https://react-my-calendar.firebaseio.com/'
});

export default instance;