import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CTAButton from '../../components/CTAButton/CTAButton';
import FormInput from '../../components/FormInput/FormInput';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import validate from '../../tools/validate';
import { Form } from 'antd';
import axios from 'axios';
import Message from '../../components/Message/Message';
import './Login.scss';
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/types'



const Login = (props) => {

    const history = useHistory();
    
    const cred = props.credentials;
    //localStorage.getItem('credentials');
    if (cred.user?.id)
    if (cred.user.admin) history.push('/admin')
    else history.push('/profile');

    const [credentials, setCredentials] = useState({email:'',password:''});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState([]);

    const updateCredentials = (key,value) => {
        setCredentials({...credentials, [key]: value});
        if (Object.keys(errors).length > 0) setErrors(validate({...credentials, [key]: value},'login'));
    }

    const handleResponse = (response) => {
        if (response.status == 200) {
           // localStorage.setItem('credentials',JSON.stringify(response.data));
            props.dispatch({type:LOGIN,payload:response.data});
            if (response.data.user.admin) history.push('/admin');
            else history.push('/profile');
        } else {
            setLoading(false);
            newMessage(response.data.message);
        }
    }

    const newMessage = (msg, style = 'error') => {
        const key = (~(Math.random()*99999));
        setMessage([...message,<Message key={key} text={msg} style={style}></Message>]);
    }

    const submit = async () => {
        
        const errs = validate(credentials,'login');
        setErrors(errs);

        if (Object.keys(errs).length === 0) {
            setLoading(true);
            setTimeout(()=>{
                axios.post('http://localhost:3001/login',credentials)
                .then(handleResponse)
                
                .catch((err)=>{handleResponse({data:{message:'Error de conexión.'}})});
            },500);
        }
    }

    useEffect(()=>{
        const pendingmessage = localStorage.getItem("pendingmessage");
    if (pendingmessage) {
        newMessage(pendingmessage,'success');
        localStorage.removeItem("pendingmessage");
    }
    },[]);

    

    return (
        <>
        <Header></Header>
        <Loading visible={loading}></Loading>
        <section className="loginContainer">
            {message}
            <div className="login">
                <h2>¡Hola otra vez!</h2>
                <p>Introduce tu email y tu contraseña para acceder al área de cliente y pedir cita.</p>
                <div className="inputContainer">
                    <Form.Item validateStatus={errors.email?.status} help={errors.email?.help}>
                        <FormInput label="Correo Electrónico" name="email" onChange={updateCredentials} maxLength="50"></FormInput>
                    </Form.Item>
                </div>
                <div className="inputContainer">
                    <Form.Item validateStatus={errors.password?.status} help={errors.password?.help}>
                        <FormInput type="Password" label="Contraseña" name="password" onChange={updateCredentials} maxLength="99"></FormInput>
                    </Form.Item>
                </div>
                <div className="buttonContainer">
                    <CTAButton goto="login" text="Acceder" styling="CTA" onClick={()=>submit()}/>
                </div>
            </div>
            <div className="separator">
                
            </div>
            <div className="register">
                <h3>¿Aún no nos conoces?</h3>
                <p>En React Dent contamos con los mejores odontólogos generales y especialistas en Valencia, comprometidos a dar el mejor cuidado a tu salud dental.</p>
                <div className="buttonContainer">
                    <CTAButton goto="register" text="Regístrate" styling="alt"/>
                </div>
            </div>
        </section>
        <footer>
            
        </footer>
        </>
    )
}

export default connect((state)=>({credentials: state.credentials}))(Login);