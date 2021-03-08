import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
 import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
         
      <Switch>

           <Route path='/' exact component={Home}/>
           <Route path='/login' exact component ={Login}/>
           <Route path='/register' exact component ={Register}/>
           <Route path='/profile' exact component ={Profile}/>
           <Route path='/profile/appointment' exact component ={Profile}/>
           <Route path='/profile/historial' exact component ={Profile}/>

      </Switch>
         
      </BrowserRouter>
      
    </div>
  );
}

export default App;
