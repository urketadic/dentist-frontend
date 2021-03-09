import React from 'react';
import CTAButton from '../../components/CTAButton/CTAButton';
import Header from '../../components/Header/Header';

import '../Home/Home.scss';


const Home =()=>{

    return(
        <div className='vistaHome'>
            
            <Header home="true"></Header>
                
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