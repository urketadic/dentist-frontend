import React from 'react';
import Header from '../../components/Header/Header';
import '../Home/Home.css';


const Home =(props)=>{





    return(
        <div className='vistaHome'>
            <Header/>

            <main className='vistaMain'>
                <div className="slogan">
                   <strong>Molestias dentales? , Reactiona!!!! Ven a ReactDent
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