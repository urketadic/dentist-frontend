import React from 'react';
import CTAButton from '../../components/CTAButton/CTAButton';
import Header from '../../components/Header/Header';
import implante from '../../img/implante.jpg';
import '../Home/Home.scss';
import ortodoncia from '../../img/ortodoncia.jpg';
import protesis from '../../img/protesis.jpg';
import endodoncia from '../../img/endodoncia.jpg';
import Odontopediatria from '../../img/Odontopediatria.jpg';
import cirugia from '../../img/cirugia.jpg';

const Home =()=>{

    return(
        <div className='vistaHome'>
            
            <Header home="true"></Header>
                
            <main className='vistaMain'>
                <div className="slogan">
                    <br/>
                   <strong>¿Molestias dentales?<br/>
                    ReacTiona!!!! Ven a React Dent <br/>
                    Registrate y pide tu primera  Cita Gratis ahora.
                   </strong>
                </div>
                <br/>
                <div className="vistaClinica"></div>
             
                    <div>
                    <h1>Tratamientos que realizamos desde nuestra clínica dental en Valencia</h1>
                    <h3 className='h3'>
                        React Dent es una clínica dental en Valencia formada por un equipo profesional que cuenta con unas instalaciones equipadas con los últimos avances tecnológicos. Somos especialistas en odontología mínimamente invasiva, trabajamos para mantener y cuidar tus dientes, respetando siempre, los sistemas naturales bucodentales.
                    </h3>
                    <h3 className='h3'> Queremos ser tu dentista en Valencia de confianza.</h3>
                    <div className="coleccionespecialidades">
                        <div className='vistaDivEspecialidades'>
                            <div className= "especialidad">
                            <img src={implante} />
                            </div>
                            <h2 className='h2'>Implantes</h2>
                            <h3 className='h3'>Un implante dental es una raíz de titanio que se coloca como soporte para sustituir dientes que el paciente ha perdido</h3>
                            
                        </div>
                        <div className='vistaDivEspecialidades'>
                            <div className="especialidad">
                            <img src={protesis} />
                            </div>
                            <h2 className='h2'>Protesis</h2>
                            <h3 className='h3'>Las prótesis dentales son los dientes postizos que sustituyen a los dientes naturales. Cuando falta uno o varios dientes</h3>

                        </div>
                        <div className='vistaDivEspecialidades'>
                            <div className="especialidad">
                                <img src={endodoncia} />
                            </div>
                            <h2 className='h2'>Endodoncia</h2>
                            <h3 className='h3'>Es un tratamiento necesario de realizar cuando en un diente tenemos una infección o una pulpitis irreversible</h3>
                        </div>
                        <div className='vistaDivEspecialidades'>
                            <div className="especialidad">
                            <img src={ortodoncia} />
                            </div>
                            <h2 className='h2'>Ortodoncia</h2>
                            <h3 className='h3'>La ortodoncia es una especialidad de la odontología que corrige la malposición de los dientes para colocarlos en su lugar correcto</h3>
                        </div>
                        <div className='vistaDivEspecialidades'>
                            <div className="especialidad">
                            <img src={cirugia} />
                            </div>
                            <h2 className='h2'>Cirugía Oral</h2>
                            <h3 className='h3'>Encargada del diagnóstico, prevención y a veces, tratamiento de las patologías orales.</h3>
                        </div>
                        <div className='vistaDivEspecialidades'>
                            <div className="especialidad">
                                <img src={Odontopediatria} alt=""/>
                            </div>
                            <h2 className='h2'>Odontopediatria</h2>
                            <h3 className='h3'>Es la especialidad de la odontología que se encarga del cuidado de la salud bucodental del niño desde que nace hasta los 16 años.</h3>
                        </div>
                    </div>
                    </div>
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