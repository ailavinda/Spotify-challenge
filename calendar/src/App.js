import React, { Component } from 'react';

///////////////////////////////////////////////////////////
// The App structure is according to:                    //
//                                                       //
//     Maximilian Schwarzmüller                          //
//                                                       //
// https://www.udemy.com/user/maximilian-schwarzmuller/  //
///////////////////////////////////////////////////////////

import Layout from './hoc/Layout/Layout';
import CalendarUpdater from './containers/CalendarUpdater/CalendarUpdater';

class App extends Component {
  render() {
    return (
      <div>

        <Layout>

          <CalendarUpdater />

        </Layout>

      </div>
    );
  }
}

export default App;
