import React from 'react';
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import {useHistory} from 'react-router-dom';
import './Profile.scss';
import Avatar from '../../components/Avatar/Avatar';
import moment from 'moment';
import {connect} from 'react-redux';




const Profile = (props) => {

    let history = useHistory();
    let credentials = props.credentials;
    
    //let credentials = JSON.parse(localStorage.getItem('credentials'));

    if(!credentials.user?.id) history.push('/login');

    let  UserAge = Math.floor(moment().diff(credentials.user.born, 'years',true));

    const SwitshToActualizarPerfil=()=>{
        history.push('/Actualizar-profile');
    }
    const SwitshToLogin=()=>{
        history.push('/profile/new-appointment');
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
                              <Avatar name={credentials.user.name} styling="big"/>
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
                      <div className="tres">
                          <div className="actualizarDatos">
                              <div className="hoverUpdate" onClick={()=>{SwitshToActualizarPerfil()}}>Actualizar Mi Perfil</div> 
                          </div>
                      </div>
   
                    </div>
                <div className="ContenedorCita">
                   <div className="FotoCalendario"></div>
                   <div className="PideCita">
                       <button className="botonDos" onClick={()=>{SwitshToLogin()}}>Pide Tu Cita</button>
                   </div>
                  </div>
                   
                </div>
            </div>
        </section>
        <footer>
            
        </footer>
        </>
    )
}

export default connect((state)=>({credentials:state.credentials}))(Profile);