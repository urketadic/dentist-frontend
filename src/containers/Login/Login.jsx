import React from 'react';
import { useState } from 'react';
import CTAButton from '../../components/CTAButton/CTAButton';
import FormInput from '../../components/FormInput/FormInput';
import Header from '../../components/Header/Header';
import validate from '../../tools/validate';
import { Form } from 'antd';
import axios from 'axios';

import './Login.scss';



const Login = (props) => {

    const [credentials, setCredentials] = useState({email:'',password:''});
    const [errors, setErrors] = useState({});

    const updateCredentials = (key,value) => {
        setCredentials({...credentials, [key]: value});
        if (Object.keys(errors).length > 0) setErrors(validate({...credentials, [key]: value}));
    }

    const submit = async () => {
        
        const errs = validate(credentials);
        setErrors(errs);

        if (Object.keys(errs).length === 0) {
            console.log('sending',credentials);
            let response = await axios.post('http://localhost:3001/login',credentials);
            console.log(response);
        }
    }

    return (
        <>
        <Header></Header>
        <section className="loginContainer">
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

export default Login;