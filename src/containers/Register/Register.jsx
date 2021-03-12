import React , {useEffect,useState}  from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import checkError from '../../Myfunctions';
import axios from 'axios';
import CTAButton from '../../components/CTAButton/CTAButton';
import FormInput from '../../components/FormInput/FormInput';
import './Register.scss';



const Register=(props)=>{
    let history = useHistory();
    //Hooks

    const [user, setUser] = useState({

        email : '',
        password:'',
        name : '',
        lastname : '',
        address:'',
        nif:'',
        born:'',
        phone:''
        
    });

    useEffect(()=> {
    
        console.log("Mounted...");
        
    },[]);

    useEffect(()=> {
        console.log('el handler funciona');
   
    });

    useEffect(()=>{

        return()=>{
            console.log("unmounted");
        }
    },[]);

    const [mensaje, setMensaje] = useState('');

   

     // Manejar el estado

     const handler = (name,value)=>{
        setUser({...user, [name]:value});
        
      }

      // Envio de datos del registro

      const sendData = async ()=>{
          


        setMensaje('');
        // Errors check

        let messajeError = checkError(user);
        setMensaje(messajeError);

        if(messajeError){
            return;
        }

        let bodyData={
        email : user.email,
        password:user.password,
        name : user.name,
        lastname : user.lastname,
        address:user.address,
        nif:user.nif,
        born:user.born,
        phone:user.phone
        }
        console.log('Datos del Registro',bodyData);

        let endpointRegister = 'http://localhost:3001/users'
          
           let data = await axios.post(endpointRegister, bodyData);
        console.log(data.status);
        if(data.status == 200){
             
            alert(`Enhorabuena ${user.name}Se ha registado con exito`);
            setTimeout(()=>{
             history.push('/login')  
            },2000)
   
        }else
        alert('Error de Registro')
      }
    return(
        <>
        <Header></Header>
        <div className="registerContainer">
            
            <strong className='paragraph'>Regístrate gratis en React Dent</strong>
            <strong className='paragraph'>Crea tu cuenta ahora y pide cita para disfrutar de la mejor atención odontológica en Valencia.</strong>
            
            <div className="form">
                <div className="formOne">
                <FormInput label="Nombre" name="name" onChange={handler}/>
                <FormInput label="Apellidos" name="lastname" onChange={handler}/>
                  </div>
                <div className="formOne">
                <FormInput label="Dirección" name="address" onChange={handler}/>
                <FormInput label="Documento de identidad" name="nif" onChange={handler}/>
                </div>
                <div className="formOne">
                <FormInput label="Telefono" name="phone" onChange={handler}/>
                <FormInput  label="Fecha de nacimiento" name="born"onChange={handler}/>
                </div>
                <div className="formOne">
                <FormInput label="Correo Electrónico" name="email" onChange={handler}></FormInput>
                <FormInput  label="Repita el email" name="emailValidation"onChange={handler}/>
                </div>
                <div className="formTwo">
                <FormInput type="Password"  label="Contraseña" name="password" onChange={handler}/>
                <FormInput type="Password"  label="Repita la Contraseña" name="passwordValidation" onChange={handler}/>
                 
                </div><br/>
                
                
                <div>{mensaje}</div>
            </div>
            <button className='subbmit' onClick={()=>sendData()}>Subbmit</button><br/>
            <CTAButton goto='' name='Home' text ='Home'/>
        </div>
        </>
    )

}



export default Register;