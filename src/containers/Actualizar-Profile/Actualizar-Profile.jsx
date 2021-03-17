import React from 'react';
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import {useHistory} from 'react-router-dom';
import {useState , useEffect} from 'react';
import Avatar from '../../components/Avatar/Avatar'
import moment from 'moment'
import './Actualizar-Profile.scss'
import FormInput from '../../components/FormInput/FormInput';
import {connect} from 'react-redux';


const ActualizarProfile = (props) => {

    const [user,setUser]= useState({

        email: "",
        name: "",
        lastname: "",
        address: "",
        nif: "",
        phone: ""
        
    })

    
    let history = useHistory();
    let credentials=props.credentials;
    
  //  let credentials = JSON.parse(localStorage.getItem('credentials'));

    if(!credentials.user?.id) history.push('/login');

    let  UserAge = Math.floor(moment().diff(credentials.user.born, 'years',true));

    const GotoUpdateProfile=()=>{
        history.push('/Actualizar-Profile');
    }

    const Actualizar=()=>{

        let newUserData = {

             email : user.email,
             name: user.email,
             lastname: user.lasname,
             address: user.adress,
             nif: user.nif,
             phone: user.phone
         }
    }

    return (
        <>
        <Header></Header>
        <section className="profileContainer">
            <LeftMenu></LeftMenu>
            <div className="profile">
                <div className="bienvenida">Bienvenido/a, {credentials.user.name}.</div>
                <div className="cuerpo">
                    <div className="UserData">
                      <div className="uno">
                          <div className="avatar">
                              <Avatar name={credentials.user.name} styling='big' />
                          </div>
                          <div className="datosPersonalesUno">
                            
                             <div>{credentials.user.name}  {credentials.user.lastname}</div>
                             <div>{credentials.user.email}</div>
                             <div>Edad {UserAge}  años</div>

                
                          </div>
                      </div>
                      <div className="dos">
                          <div className="datosPersonalesDos">
                             <div>Información De Contacto</div> 
                             <div>{credentials.user.phone}</div> 
                             <div>{credentials.user.address}</div>
                               
                          </div>
                      </div>
                
                    </div>
                   <div className="Actualizar">
                      <FormInput  label="Introduzca su Nombre"/>
                      <FormInput label="Introduzca sus apellidos"/>
                      <FormInput label="Introduzca su E-mail"/>
                      <FormInput label="Introduzca su Telefono"/>
                      <FormInput label="Introduzca su Dirección"/>
                      <FormInput label="Introduzca su Nuevo nif"/>
                      <button className="boton" onClick={()=>{Actualizar()}}>Actualizar</button>
                   </div>
                  
                   
                </div>
            </div>
        </section>
        <footer>
            
        </footer>
        </>
    )
}

export default connect((state)=>({credentials:state.credentials}))(ActualizarProfile);