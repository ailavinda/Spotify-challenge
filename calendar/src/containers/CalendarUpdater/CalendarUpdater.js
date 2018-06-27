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

const yearNum = moment().year();
const monthNum = moment().month();
const weekNum = moment().week();
const dayNumY = moment().dayOfYear();
const dayNumM = moment().date();

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

;
const myYear = new Date().getFullYear();


const allNumYear = [];
let oneMonth = [];

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

  state = {
    calendar: CALENDAR_CONSTANTS,
    updatable: false,
    confirming: false,
    loading: false

  }

  confirmHandler = () => {
    this.setState({confirming: true});
  }

  newEventCancelHandler = () => {
    this.setState({confirming: false});
  }

  newEventContinueHandler = () => {

    this.setState( { loading: true } );
    
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
