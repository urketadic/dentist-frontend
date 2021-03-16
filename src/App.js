import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import './App.scss';
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Profile from './containers/Profile/Profile';
import NewAppointment from './containers/New-appointment/New-appointment';
import Appointments from './containers/Appointments/Appointments';
import ActualizarProfile from './containers/Actualizar-Profile/Actualizar-Profile';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
         
        <Switch>

          
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component ={Login}/>
          <Route path='/register' exact component ={Register}/>
          <Route path='/profile' exact component ={Profile}/>
          <Route path='/profile/my-appointments' exact component={Appointments}/>
          <Route path='/profile/new-appointment' exact component={NewAppointment}/>
          <Route path='/Actualizar-Profile' exact component={ActualizarProfile}/>


         
          
        </Switch>
         
      </BrowserRouter>
      
    </div>
  );
}

export default App;
