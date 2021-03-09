import React from 'react';
import CTAButton from '../../components/CTAButton/CTAButton';

import '../Home/Home.css';


const Home =()=>{

    return(
        <div className='vistaHome'>
            <header className="vistaHeader" >
            <div className="logo"></div>
            <div className="vistaBoton">
            <CTAButton goto="login" text="Entrar o registrarte" styling="CTA"/>
             </div>
            </header>
                
            <main className='vistaMain'>
                <div className="slogan">
                   <strong>¿Molestias dentales?<br/>
                    ReacTiona!!!! Ven a ReactDent <br/>
                    Registrate y pide tu primera  Cita Gratis ahora.
                   </strong>
                </div>
                <div className="vistaClinica"></div>
            </main>

            <footer className='vistaFooter'>
               <div className="politica">
                   <p>Política de privacidad - Términos y condiciones - Política de Cookies </p>
               </div>
               <div className="adress">
                 <p>91 654 321 321 - C/ Ratón Pérez 52, 46001 Valencia</p>
               </div>
               <div className="copyright">
                   <p>Copyright 2021 ReactDent</p>
               </div>
            </footer>

        </div>
    )
}

export default Home;