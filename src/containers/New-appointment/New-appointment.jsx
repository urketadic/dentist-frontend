import React, { useState ,useEffect} from 'react';
import Header from '../../components/Header/Header'
import {useHistory} from 'react-router-dom';
//import CTAButton from '../../components/CTAButton/CTAButton'
import FormInput from '../../components/FormInput/FormInput';
import './New-appointment.scss'
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import axios from "axios";
import DatePicker from 'react-horizontal-datepicker';


const Appointment = (props)=>{


      let history = useHistory();
      let credentials = JSON.parse(localStorage.getItem('credentials'));
      //console.log(credentials)

       if(!credentials) history.push('/login');

    const [appointment, setAppointment] = useState({

        userId: credentials.user.id,
        dentistId: '',
        date: '',
        duration: '',
        comment: ''
        
    })


      //handler , asi sabremos el estado de los inputs en todo momento

      const handler = (name,value)=>{
        setAppointment({...appointment, [name]:value });
        
      }
    
      

     
    // useEffect , manejo del estado de los componentes

     useEffect(()=>{
     console.log('me acabo de montar')
        
    },[]);

     useEffect(()=>{
 
       console.log('me estoy actualizando ,estoy aqui ya sabes useEffect')
    })  


      // Mis Funciones

      const sendData = async()=>{
        
        let userId =  credentials.user.id;
        console.log(userId)
       let appointmentData={
          
            dentistId: appointment.dentistId,
            date: appointment.date,
            duration: appointment.duration,
            comment: appointment.comment
            
             
           }
           console.log(appointmentData);
            
            let endpointAppointments = `http://localhost:3001/users/${userId}/appointments`

            let token = credentials.token;
            console.log(token)
            
            let dataResults= await axios.post(endpointAppointments,appointmentData,{headers:{"authorization":"Bearer " + token}});
            
            
         if(dataResults.status == 200){
           alert(`${credentials.user.name} : Su Cita Se ha Generado Correctamente`)
         }else{
           alert(`Ha ocurrido un error, Vuelva a intentarlo ${credentials.user.name} , si el error persiste Porfavor contantenos por telefono`)
         }
      }
        //Chivato
      //<pre className="pre">{JSON.stringify(appointment)}</pre>


    return(
      
      <>
      <Header></Header>
      
      <div className="container"> 
        <div className="leftMenu">
            <LeftMenu/> 
           </div>
        <div className="right">
           <div className="bienvenida">
             <h3 className="h3">Hola {credentials.user.name}</h3>
           </div>
           <div className="calendario">
              <div className="App">
              <DatePicker getSelectedDay={(val)=>{handler('date',val)}}/>
              </div>
           </div>
           <div className="cuerpo">
                 
                <div className="form">
                  <div className="lateral"></div>
                   <div className="input">
                    <select  id="dentistId" name="dentistId" value='1' onChange={(e)=>handler(e.target.name,e.target.value)} >
                        <option  value='1' >Dr.Iglesias fornes David</option>
                        <option  value='2 '>Dra.Flores Marin Lorena</option>
                        <option  value='3' >Dr.Zemmari Kissani Tarik</option>
                        <option  value='4' >Dra.Sanz Iglesias Noemi</option>
                    </select>
                   </div>
                    <div className="input">
                   <FormInput label="Duration estimada maximo 2H" name="duration" onChange={handler}/>
                   </div>
                   <div className="input">
                   <FormInput label="¿ Cual es Su Dolencia ?" name="comment" onChange={handler}/>
                   </div>
                   <div className="lateral"></div>
                 <div/>
               
           </div>
<button className='subbmit' onClick={sendData}>Subbmit</button><br/> 
         </div> 

        </div>

       </div> 
      
     </>
       
    )
}

export default Appointment;