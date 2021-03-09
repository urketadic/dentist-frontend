import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
 import './App.css';
import Login from './containers/Login/Login';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
         
        <Switch>

          <Route path='/login' exact component ={Login}/>
          {/*
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component ={Login}/>
          <Route path='/register' exact component ={Register}/>
          <Route path='/profile' exact component ={Profile}/>
          <Route path='/profile/my-appointments' exact component ={MyAppointments}/>
          <Route path='/profile/new-appointment' exact component ={NewAppointment}/>
          */}
        </Switch>
         
      </BrowserRouter>
      
    </div>
  );
}

export default App;
