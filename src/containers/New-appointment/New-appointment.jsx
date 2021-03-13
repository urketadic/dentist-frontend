import React, { useState ,useEffect} from 'react';
import Header from '../../components/Header/Header'
import {useHistory} from 'react-router-dom';
//import CTAButton from '../../components/CTAButton/CTAButton'
import FormInput from '../../components/FormInput/FormInput';
import './New-appointment.scss'
import LeftMenu from '../../components/LeftMenu/LeftMenu';

const Appointment = (props)=>{

    const [appointment, setAppointment] = useState({

        userId: '',
        dentistId: '',
        date: '',
        duration: '',
        comment: '',
        paid: ''
    })


      //handler , asi sabremos el estado de los inputs en todo momento

      const handler = (name,value)=>{
        setAppointment({...appointment, [name]:value});
        
      }
     
    // useEffect , manejo del estado de los componentes

     useEffect(()=>{
     console.log('me acabo de montar')
        
    },[]);

     useEffect(()=>{
 
       console.log('estoy aqui')
    })  


      // Mis Funciones

      const sendData = ()=>{

        return;
      }


      let history = useHistory();
      let credentials = JSON.parse(localStorage.getItem('credentials'));

       if(!credentials) history.push('/login');



    return(
       <>
       <Header></Header>
      <div className="container">
           <div className="leftMenu">
            <LeftMenu/> 
           </div>
           <div className="right">
           <div className="bienvenida">
             <h3>Hola {credentials.user.name}</h3>
           </div>
           <main className="cuerpo">
                <div className="form">
                  <div className="input">
                   <h5>Nombre del cliente</h5>
                   <FormInput   label ={credentials.user.name} name="userId" onClick ={handler}/>
                  </div>
                  <div className="input">
                  <h5>Dentista :</h5>
                  <select name="dentistId" id="dentists">
                          <option value="1">Dr.Iglesias fornes David</option>
                          <option value="2">Dra.Flores Marin Lorena</option>
                          <option value="3">Dr.Zemmari Kissani Tarik</option>
                          <option value="4">Dra.Sanz Iglesias Noemi</option>
                  </select>
                  </div>
                  <div className="input">
                   <h5>Fecha de su Cita</h5>
                   <FormInput label="Proxima cita" name="date" onClick ={handler}/>
                  </div>
                  <div className="input">
                  <h5>Duracion Aprox de la consulta</h5>
                   <FormInput name="duration" onClick ={handler}/>
                  </div>
                  <div className="input">
                  <h5>Dolencia</h5>
                   <FormInput name="comment" onClick ={handler}/>
                  </div>
                  <div className="input">
                  <h5>Pago de la consulta</h5>
                  <FormInput name="paid" onClick={handler}/>
                  </div>
                  <button className='subbmit' onClick={()=>sendData()}>Subbmit</button><br/>
               <div/>
          </div>     
        </main>
       </div> 
     </div>
        </>
    )
}

export default Appointment;