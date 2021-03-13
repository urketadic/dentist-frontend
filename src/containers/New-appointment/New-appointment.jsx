import React, { useState ,useEffect} from 'react';
import Header from '../../components/Header/Header'
import {useHistory} from 'react-router-dom';
//import CTAButton from '../../components/CTAButton/CTAButton'
import FormInput from '../../components/FormInput/FormInput';
import './New-appointment.scss'
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import axios from "axios";

const Appointment = (props)=>{


      let history = useHistory();
      let credentials = JSON.parse(localStorage.getItem('credentials'));

       if(!credentials) history.push('/login');

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

      const sendData = async()=>{
        let userId = 14

       let appointmentData={
          
            dentistId: appointment.dentistId,
            date: appointment.date,
            duration: appointment.duration,
            comment: appointment.comment,
            paid: appointment.paid
             
           }
           console.log(appointmentData);
            
            let endpointAppointments = `http://localhost:3000/users/${userId}/appointments`
            let dataResults= await axios.post(endpointAppointments,appointmentData);
         if(dataResults.status == 200){
           alert(`${credentials.user.name} : Su Cita Se ha Generado Correctamente`)
         }else{
           alert(`Ha ocurrido un error, Vuelva a intentarlo ${credentials.user.name} , si el error persiste Porfavor contantenos por telefono`)
         }
      }


      


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
                   <FormInput   label ={credentials.user.name} name="userId" onChange={handler}/>
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
                   <FormInput label="Proxima cita" name="date" onChange={handler}/>
                  </div>
                  <div className="input">
                  <h5>Duracion Aprox de la consulta</h5>
                   <FormInput name="duration" onChange={handler}/>
                  </div>
                  <div className="input">
                  <h5>Dolencia</h5>
                   <FormInput name="comment" onChange={handler}/>
                  </div>
                  <div className="input">
                  <h5>Pago de la consulta</h5>
                  <FormInput name="paid"onChange={handler}/>
                  </div>
                  <button className='subbmit' onClick={sendData}>Subbmit</button><br/>
               <div/>
          </div>     
        </main>
       </div> 
     </div>
        </>
    )
}

export default Appointment;