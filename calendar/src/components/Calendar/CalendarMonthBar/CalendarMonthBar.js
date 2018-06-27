import React from 'react';

import classes from './CalendarMonthBar.css';

import Aux from '../../../hoc/Aux/Aux';

const calendarMonthBar = (props) => {

  let ind = props.monthConst - 1;
  const prvMnth = props.allMonths[ ind++ ];
  const schMnth = props.allMonths[ ind++ ];
  const nxtMnth = props.allMonths[ ind++ ];

  const daysBar = (shortN) => {
    
    const dsBar = shortN.map( ( el, i ) => {
      
        return (<div key={i} className={classes.WeekDays} >{el}</div>);
    });

    return dsBar; 
  }; 

  return(

      <Aux>

        <div className={classes.MonthBar}>

          <div className={classes.PrevMonth}>
            {prvMnth}
          </div>

          <div className={classes.SchedMonth}>
            {schMnth}
          </div>

          <div className={classes.NxtMonth}>
            {nxtMnth}
          </div>

        </div>


        <div className={classes.Days}>
            {daysBar(props.shortNamesDays)}
        </div>

      </Aux>

  );

};

export default calendarMonthBar;