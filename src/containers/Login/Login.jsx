import React from 'react';
import CTAButton from '../../components/CTAButton/CTAButton';
import FormInput from '../../components/FormInput/FormInput';
import Header from '../../components/Header/Header';

import './Login.scss';



const Login = (props) => {

    return (
        <>
        <Header></Header>
        <section className="loginContainer">
            <div className="login">
                <h2>¡Hola otra vez!</h2>
                <p>Introduce tu email y tu contraseña para acceder al área de cliente y pedir cita.</p>
                <div className="inputContainer">
                    <FormInput label="Correo Electrónico" name="email"></FormInput>
                </div>
                <div className="inputContainer">
                    <FormInput type="Password" label="Contraseña" name="password"></FormInput>
                </div>
                <div>
                    <CTAButton goto="login" text="Acceder" styling="CTA"/>
                </div>
            </div>
            <div className="separator">
                
            </div>
            <div className="register">
                <h3>¿Aún no nos conoces?</h3>
                <p>En React Dent contamos con los mejores odontólogos generales y especialistas en Valencia, comprometidos a dar el mejor cuidado a tu salud dental.</p>
                <div>
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