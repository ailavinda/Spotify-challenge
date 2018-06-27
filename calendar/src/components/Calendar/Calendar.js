import React from 'react';

///////////////////////////////////////////////////////////
// The App structure is according to:                    //
//                                                       //
//     Maximilian Schwarzmüller                          //
//                                                       //
// https://www.udemy.com/user/maximilian-schwarzmuller/  //
///////////////////////////////////////////////////////////

import classes from './Calendar.css';
import CalendarYearBar from './CalendarYearBar/CalendarYearBar';
import CalendarMonthBar from './CalendarMonthBar/CalendarMonthBar';
import CalendarSevenDaysBar from './CalendarSevenDaysBar/CalendarSevenDaysBar';
import CalendarFooterBar from './CalendarFooterBar/CalendarFooterBar';


const calendar = (props) => {

  // props.events are passed from CalendarUpdater...

  let   sevenDaysBar = [];
  const setOfWeeks = [];
  const startDay = props.calendarConst.allNumYear[props.calendarConst.schedMonth];
  let   indOfFirst = startDay[1];
  const lastDay = startDay[2] + indOfFirst;


  let k = 1;
  for (let i = 0; i < 7; i++) {
    // For all days in the scheduled month...

    if ((indOfFirst > 0) && (i === 0)) {
      for (let l = 0; l < indOfFirst; l++) {
        sevenDaysBar.push(0);
      }
    }

    if (i > 0) {
      indOfFirst = 0;
    }
    
    for (let j = indOfFirst; j < 7; j++) {
      // Within one week = 7 days... 
      if (k <= lastDay) {
        sevenDaysBar.push(k);

      } else if (k > lastDay) {
        sevenDaysBar.push(0);
      }
      
      k++;
    }

    setOfWeeks.push(sevenDaysBar);
    sevenDaysBar = [];

    if (k > lastDay) {
      break;
    }

  }

  let daysOfMonth = setOfWeeks
                    .map( (iWeek, i) => {
                  
                        return <CalendarSevenDaysBar 
                                    key={i} 
                                    week={iWeek} 
                                    indWeek={i}
                                    confirmed={props.confirmed}  />;
                    });

  return (
    <div className={classes.Calendar} >

      <CalendarYearBar 
          type="year" 
          yearConst={props.calendarConst.curYear} 
          user={props.calendarConst.userName} />

      <CalendarMonthBar 
          type="month" 
          monthConst={props.calendarConst.schedMonth} 
          allMonths={props.calendarConst.allMonths} 
          shortNamesDays={props.calendarConst.allDaysShort} />

      {daysOfMonth}

      <CalendarFooterBar type="footer" />

    </div>
  );
};

export default calendar;