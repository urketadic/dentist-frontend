import React, { useState, useEffect } from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import './App.scss';
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Profile from './containers/Profile/Profile';
import NewAppointment from './containers/New-appointment/New-appointment';
import Appointments from './containers/Appointments/Appointments';
import Admin from './containers/Admin/Admin';
import AllAppointments from './containers/AllAppointments/AllAppointments';
import Prices from './components/Prices/Prices';


function App() {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "light" : "light"));
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
      }, [theme]);
    

  return (

    <div className="App">
        
        <BrowserRouter>
            
            <Switch>

            
                <Route
                    path="/"
                    exact
                    render={(props) => <Home {...props} theme={theme} toggleTheme={toggleTheme} />}
              />
                <Route path='/login' exact component ={Login}/>
                <Route path='/register' exact component ={Register}/>
                <Route path='/profile' exact component ={Profile}/>
                <Route path='/profile/my-appointments' exact component={Appointments}/>
                <Route path='/profile/new-appointment' exact component={NewAppointment}/>
                <Route path='/admin' exact component ={Admin}/>
                <Route path='/admin/all-appointments' exact component ={AllAppointments}/>
                <Route
                    path="/cenovnik"
                    exact
                    render={(props) => <Prices {...props} theme={theme} />}
                />
            
            
            </Switch>
            
        </BrowserRouter>


    </div>
  );
}

export default App;
