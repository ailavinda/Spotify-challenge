import React from 'react';

import classes from './CalendarYearBar.css';

const calendarYearBar = (props) => {

  return (

      <div className={classes.YearBar} >

          <div className={classes.Year}>{props.yearConst}</div>
          <div className={classes.SpaceBtw}></div>
          <div className={classes.Name}>{props.user}</div>

      </div>

  );


};

export default calendarYearBar;