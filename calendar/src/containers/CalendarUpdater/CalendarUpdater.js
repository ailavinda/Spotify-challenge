import React, { Component } from 'react';

///////////////////////////////////////////////////////////
// The App structure is according to:                    //
//                                                       //
//     Maximilian Schwarzmüller                          //
//                                                       //
// https://www.udemy.com/user/maximilian-schwarzmuller/  //
///////////////////////////////////////////////////////////

import Aux from '../../hoc/Aux/Aux';
import Calendar from '../../components/Calendar/Calendar';
import Modal from '../../components/UI/Modal/Modal';
import EventForm from '../../components/Calendar/EventForm/EventForm';
// Adding spinner component:
import Spinner from '../../components/UI/Spinner/Spinner';

import moment from 'moment';

// Instance of axios with particular
// end-point preconfigured...
import axios from '../../axios-updates';

const yearNum = moment().year();
const monthNum = moment().month();
const weekNum = moment().week();
const dayNumY = moment().dayOfYear();
const dayNumM = moment().date();
// const daysNumM = moment().daysInMonth();

const CALENDAR_CONSTANTS = {

  curYear: `${yearNum}`,
  curMonth: `${monthNum}`,
  curWeek: `${weekNum}`,
  curDayY: `${dayNumY}`,
  curDayM: `${dayNumM}`,
  schedYear: `${yearNum}`,
  schedMonth: '' + (1*monthNum + 1),
  allMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
  allMonShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
  allDaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
  allDaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ],
  userName: 'Anatoliy Lavinda',
  allNumYear: []

}

// const myMonth = new Date().getMonth();
const myYear = new Date().getFullYear();
const curDateISO = new Date().toISOString();

// const firstDayOfMonth = ( month, year ) => (
//   new Date(`${year}-${month + 1}-01`).getDay()
// );

const allNumYear = [];
let oneMonth = [];

// console.log('days in month 2: ', moment(`${myYear}-${('0'+ 2).slice(-1, 2)}`, "YYYY-MM").daysInMonth())
// console.log('fist day of the month 11', new Date(`${myYear}-${11 + 1}-01`).getDay());

for (let i = 0; i < CALENDAR_CONSTANTS.allMonths.length; i++) {
  oneMonth.push(i);
  oneMonth.push(new Date(`${myYear}-${i + 1}-01`).getDay()); 
  // The 1st day of the month (both, day and month, are base 0)
  oneMonth.push(moment(`${myYear}-${('0'+(i + 1)).slice(-1, 2)}`, "YYYY-MM").daysInMonth());
  allNumYear.push(oneMonth);
  oneMonth = [];
}

CALENDAR_CONSTANTS.allNumYear = allNumYear;

class CalendarUpdater extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  //   }
  // }

  // Simple event structure example:
    //   {
    //     "@type": "jsevent",
    //     "uid": "2a358cee-6489-4f14-a57f-c104db4dc357",
    //     "updated": "2016-09-14T13:24:34Z",
    //     "title": "Squash",
    //     "start": "2016-09-28T16:00:00",
    //     "timeZone": "EST/UTC-5",
    //     "duration": "PT1H",
    //     "locale": "en"
    // }

  

  state = {
    calendar: CALENDAR_CONSTANTS,
    events: {
      "@type": "jsevent",
      "uid": "2a358cee-6489-4f14-a57f-c104db4dc357",
      "updated": curDateISO,
      "title": "description",
      "start": "2016-09-28T16:00:00",
      "timeZone": "EST/UTC-5",
      "duration": "PT1H",
      "locale": "en"

    },
    
    updatable: false,
    confirming: false,
    loading: false

  }

  // updateNewEventState(events) {


  //   const sum = Object.keys(events)
  //               .map(igKey => {
  //                 return events[igKey];
  //               })
  //               .reduce( (sum, el) => {
  //                 return sum + el;
  //               }, 0);

  //   this.setState({updatable: true});
  // }

  // addEventHandler = (type) => {
  //   const oldCount = this.state.events[type];
  //   const updatedCount = oldCount + 1;
  //   const updatedEvents = {
  //     ...this.state.events
  //   };
    
  //   this.setState({events: updatedEvents});
  //   this.updateNewEventState(updatedEvents);

  // }

  // removeEventHandler = (type) => {
  //   const oldCount = this.state.events[type];
  //   if (oldCount <= 0) {
  //     return;
  //   }
  //   const updatedCount = oldCount - 1;
  //   const updatedEvents = {
  //     ...this.state.events
  //   };

  //   this.setState({events: updatedEvents});
  //   this.updateNewEventState(updatedEvents);
 
  // }

  confirmHandler = () => {
    this.setState({confirming: true});
  }

  newEventCancelHandler = () => {
    console.log('In newEventCancelHandler...');
    this.setState({confirming: false});
  }

  newEventContinueHandler = () => {

    // This would be a good place to create
    // a database request...

    // The new node under the end-point would be
    // 'events', and in case of firebaseio - we use
    // '.json'...

    // Before sending axios request to server:
    this.setState( { loading: true } );

    // Here is JS object with event data to be
    // sent to the end-point:
    const newEvent = {
      events: this.state.events,
      user: {
        name: `${CALENDAR_CONSTANTS.userName}`,
        email: 'test@test.com'
      }
    }

    axios.post('/events.json', newEvent)
         .then(response => { 
            // Close the "Modal"...
            this.setState( { loading: false,
                             confirming: false } );
         })
         .catch(error => {
            // If failed - no spinning anymore...
            this.setState( { loading: false,
                             confirming: false } );
         });
    
  }


  render() {


    const disabledInfo = {
      ...this.state.events
    }

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let eventForm = <EventForm 
            events={this.state.events}
            
            newEventCancelled={this.newEventCancelHandler}
            newEventContinued={this.newEventContinueHandler} />;

    if (this.state.loading) {
      
      eventForm = <Spinner />;

    }

    return(

      <Aux>

        <Modal show={this.state.confirming} modalClosed={this.newEventCancelHandler} >

          {eventForm}

        </Modal>

        <Calendar 
            events={this.state.events} 
            calendarConst={this.state.calendar} 
            updatable={this.state.updatable} 
            confirmed={this.confirmHandler} />

      </Aux>

    );
  }
}

export default CalendarUpdater;
