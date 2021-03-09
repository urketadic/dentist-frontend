import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
 import './App.css';
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
         
        <Switch>

          <Route path='/login' exact component ={Login}/>
          
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component ={Login}/>
         
          
        </Switch>
         
      </BrowserRouter>
      
    </div>
  );
}

export default App;
