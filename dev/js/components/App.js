import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Header from './Header'
import FrontRoom from '../containers/FrontRoom'
import Room from '../containers/Room'

require('../../scss/style.scss');

const App = () => (
  <div>
    <Header />
    <Router>
      <Switch>
        <Route exact path='/' component={FrontRoom}/>
        <Route path='/topic/:id' component={Room}/>
      </Switch>
    </Router>

  </div>

);

export default App;
