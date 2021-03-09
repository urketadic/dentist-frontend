import React from 'react';
import CTAButton from '../../components/CTAButton/CTAButton';

import './Login.css';



const Login = (props) => {

   

    return (
        <div className="contenedorLogin">
            Soy el componente Login. Y aquí van dos ejemplos de uso del componente botón:
            <br/>
            <CTAButton goto="login" text="Entrar o registrarte" styling="CTA"/>
            <br/>
            <CTAButton goto="register" text="Regístrate" styling="alt"/>
        </div>
    )
}

export default Login;