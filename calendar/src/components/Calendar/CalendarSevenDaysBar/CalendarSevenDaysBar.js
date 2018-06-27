import React from 'react';

import classes from './CalendarSevenDaysBar.css';

const calendarSevenDaysBar = (props) => {


  const daysWeekBar = (iWeek, indWeek) => {
    const dsWkBar = iWeek.map( ( el, i ) => {
  
        return (<div key={`${indWeek}_${i}`} className={classes.WeekBar} >

                    <button 
                        className={classes.AddEventButton}
                        disabled={el === 0 ? true : props.updatable}
                        onClick={props.confirmed} >{el}</button>
                    
                </div>);
    });
    return dsWkBar; 
  }; 

  return (

    <div className={classes.SevenDaysBar}>

      {daysWeekBar(props.week, props.indWeek)}

    </div>
  );

};

export default calendarSevenDaysBar;