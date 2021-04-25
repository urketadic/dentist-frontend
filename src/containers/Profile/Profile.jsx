import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import {useHistory} from 'react-router-dom';
import './Profile.scss';
import Avatar from '../../components/Avatar/Avatar';
import moment from 'moment';
import {connect} from 'react-redux';
import pidetucitaimg from '../../img/pideTuCita.png';
import CTAButton from '../../components/CTAButton/CTAButton';
import FormInput from "../../components/FormInput/FormInput";
import Loading from "../../components/Loading/Loading";
import Message from "../../components/Message/Message";
import validate from "../../tools/validate";
import axios from "axios";
import { Form } from "antd";
import { UPDATE_USER } from "../../redux/types";


const Profile = (props) => {

    let history = useHistory();

    let credentials = props.credentials;
    
    //let credentials = JSON.parse(localStorage.getItem('credentials'));

    const [updating, setUpdating] = useState(false);
    const [user, setUser] = useState({
      name: credentials.user.name,
      lastname: credentials.user.lastname,
      address: credentials.user.address,
      nif: credentials.user.nif,
      born: credentials.user.born.split('T')[0],
      phone: credentials.user.phone,
    });
    const [message, setMessage] = useState([]);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    if(!credentials.user?.id) history.push('/login');

    let UserAge = Math.floor(moment().diff(credentials.user.born, 'years',true));

    const switchToUpdateProfile=()=>{
        setUpdating(true);
    }

    const updateUser = (key, value) => {
        setUser({ ...user, [key]: value });
        if (Object.keys(errors).length > 0) setErrors(validate({ ...user, [key]: value }, "register"));
    };

    const updateUserData = async () => {
        const errs = validate(user, "register");
        setErrors(errs);
    
        if (Object.keys(errs).length > 0) return;
    
        let userData = {
          name: user.name,
          lastname: user.lastname,
          address: user.address,
          nif: user.nif,
          born: user.born,
          phone: user.phone,
        };
    
        let userId = credentials.user.id;
    
        setLoading(true);
        setTimeout(() => {
          let token = credentials.token;
          axios
            .put(`https://reactdent-b.herokuapp.com/users/${userId}`, userData, { headers: { authorization: "Bearer " + token } })
            .then(handleResponse)
            .catch((err) => {
              handleResponse({ data: { message: "Error de conexión." } });
            });
        }, 500);
    }

    const handleResponse = (response) => {
        if (response.status == 200) {
          console.log(response.data);
          props.dispatch({ type: UPDATE_USER, payload: response.data });
          newMessage('Datos de usuario actualizados.', 'success');
          setUpdating(false);
          setLoading(false);
        } else {
          setLoading(false);
          newMessage(response.data.message);
        }
    };
    
    const newMessage = (msg, type = 'error') => {
        const key = ~(Math.random() * 99999);
        setMessage([...message, <Message key={key} text={msg} style={type}></Message>]);
    };

    return (
        <>
        <Header></Header>
        <section className="profileContainer">
            <LeftMenu></LeftMenu>
            <div className="profile">
                {message}
                <div className="bienvenida">Bienvenido/a, {credentials.user.name}.</div>
                <div className="cuerpo">
                    <div className="UserData">
                        <Loading visible={loading}/>
                        {updating?(
                            <>
                            <div className="inputContainer">
                                <Form.Item validateStatus={errors.name?.status} help={errors.name?.help}>
                                <FormInput value={user.name} label="Nombre" name="name" onChange={updateUser} />
                                </Form.Item>
                            </div>
                            <div className="inputContainer">
                                <Form.Item validateStatus={errors.lastname?.status} help={errors.lastname?.help}>
                                <FormInput value={user.lastname} label="Apellidos" name="lastname" onChange={updateUser} />
                                </Form.Item>
                            </div>
                            <div className="inputContainer">
                                <Form.Item validateStatus={errors.address?.status} help={errors.address?.help}>
                                <FormInput value={user.address} label="Dirección" name="address" onChange={updateUser} />
                                </Form.Item>
                            </div>
                            <div className="inputContainer">
                                <Form.Item validateStatus={errors.phone?.status} help={errors.phone?.help}>
                                <FormInput value={user.phone} label="Telefono" name="phone" onChange={updateUser} />
                                </Form.Item>
                            </div>
                            <div className="inputContainer">
                                <Form.Item validateStatus={errors.born?.status} help={errors.born?.help}>
                                <FormInput value={user.born} label="Fecha de nacimiento" name="born" onChange={updateUser} />
                                </Form.Item>
                            </div>
                            <div className="inputContainer">
                                <Form.Item validateStatus={errors.nif?.status} help={errors.nif?.help}>
                                <FormInput value={user.nif} label="Documento de identidad" name="nif" onChange={updateUser} />
                                </Form.Item>
                            </div>
                            <div className="saveButton">
                                <CTAButton text="Guardar" styling="CTA" onClick={()=>updateUserData()}/>
                            </div>
                          </>
                        ):(
                            <>
                            <div className="uno">
                                <div className="avatar">
                                    <Avatar name={credentials.user.name} styling="big"/>
                                </div>
                                <div className="datosPersonalesUno">
                                <h2 className="datosPersonalesName">{credentials.user.name}  {credentials.user.lastname}</h2>
                                <div>{credentials.user.email}</div>
                                <div>Edad: {UserAge} años</div>
                                </div>
                            </div>
                            <div className="dos">
                                <div className="datosPersonalesDos">
                                <div className="datosPersonalesSection">Información De Contacto</div> 
                                <div>{credentials.user.phone}</div> 
                                <div>{credentials.user.address}</div>
                                </div>
                            </div>
                            <div className="tres">
                                <div className="actualizarDatos">
                                    <div className="hoverUpdate" onClick={()=>{switchToUpdateProfile()}}>Actualizar mi información</div> 
                                </div>
                            </div>
                            </>
                        )}
                    </div>
                    <div className="ContenedorCita">
                        <img src={pidetucitaimg} className="FotoCalendario" alt='Pide tu cita'/>
                        <div className="PideCita">
                            <CTAButton goto="profile/new-appointment" text="Pide una cita" styling="CTA"/>
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