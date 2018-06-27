import React, { Component } from 'react';

///////////////////////////////////////////////////////////
// The App structure is according to:                    //
//                                                       //
//     Maximilian Schwarzmüller                          //
//                                                       //
// https://www.udemy.com/user/maximilian-schwarzmuller/  //
///////////////////////////////////////////////////////////

import Button from '../../UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './EventForm.css';
import Input from '../../../components/UI/Input/Input';

import axios from '../../../axios-updates';

    // state = {
    
    //     event: {
    //       type: { placeholder: 'jsevent', value: ''},
    //       uid: { placeholder: '2a358cee-6489-4f14-a57f-c104db4dc357', value: ''},
    //       updated: { placeholder: '2016-09-28T16:00:00', value: ''},
    //       title: { placeholder: 'description', value: ''},
    //       start: { placeholder: '2016-09-28T16:00:00', value: ''},
    //       timeZone: { placeholder: 'EST/UTC-5', value: ''},
    //       duration: { placeholder: 'PT1H', value: ''},
    //       locale: { placeholder: 'en', value: ''}
    //     },
    //     loading: false
    // }

class EventForm extends Component {

    state = {
    
        event: {

          updated: { placeholder: '2016-09-28T16:00:00', value: ''},
          title: { placeholder: 'description', value: ''},
          start: { placeholder: '2016-09-28T16:00:00', value: ''},
          duration: { placeholder: 'PT1H', value: ''}
          
        },
        loading: false
    }


  formHandler = (event) => {
    event.preventDefault();

    this.setState( { loading: true } );

    const newEvent = {
      event: this.state.event,
      user: {
        name: 'Anatoliy',
        email: 'test@test.com'
      }
    }

    axios.post('/events.json', newEvent)
         .then(response => { 
            // We also need to close the "Modal"...
            this.setState( { loading: false } );
            
            // this.props.newEventCanceled();
         })
         .catch(error => {
            // Even it is failed we do not want to spin anymore...
            this.setState( { loading: false } );
         });
  }

  inputChangedHandler = (event, inpIdent) => {

    const updForm = {
      ...this.state.event
    };

    const updFormElem = {
      ...updForm[inpIdent]
    };

    updFormElem.value = event.target.value;
    updForm[inpIdent] = updFormElem;

    this.setState({event: updForm});

  }

  render () {

    const frmElArr = [];
    for (let key in this.state.event) {
      frmElArr.push({
        id: key,
        config: this.state.event[key]
      });
    }

    let form = (
          <form onSubmit={this.formHandler} >

            { frmElArr.map(frmEl => (
                <Input 
                  key={frmEl.id}
                  label={frmEl.id}
                  placeholder={frmEl.config.placeholder}
                  value={frmEl.config.value}
                  changed={(event) => this.inputChangedHandler(event, frmEl.id)}
                  />
              ))}

            <p>Save this Event?</p>

            <Button btnType="Success" >SUBMIT</Button>

          </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (

        <div className={classes.Input} >

            <h3>New Event</h3>

            {form}        

        </div>
        
    );
  }
}

export default EventForm;