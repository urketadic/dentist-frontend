import React from 'react';
import CTAButton from '../../components/CTAButton/CTAButton';
import Header from '../../components/Header/Header';
import implante from '../../img/implante.png';
import '../Home/Home.scss';
import ortodoncia from '../../img/ortodoncia.png';
import protesis from '../../img/protesis.png';
import endodoncia from '../../img/endodoncia.png';
import Odontopediatria from '../../img/odontopediatria.png';
import cirugia from '../../img/cirugia.png';

const Home =()=>{

    return(
        <div className='vistaHome'>
            
            <Header home="true"></Header>
                
            <main className='vistaMain'>
                <div className="sloganContainer">
                    <div className="slogan">
                        <div className="sloganText">
                            <h2>¿Molestias dentales?<br/>
                            <span className="reacciona">¡Reacciona!</span> Ven a React Dent </h2>
                            Regístrese y pida su primera cita gratis ahora.
                            <div className="buttonContainer">
                                <CTAButton text="Regístrate" goto="register"></CTAButton>
                            </div>
                        </div>
                        <div className="dentist">
                        </div>
                    </div>
                </div>
                <iframe className="gMap" style={{border:0}} loading="lazy"
src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJu25r3UxPYA0RUDakqjsJ16s&key=AIzaSyDGUWXjv7ggrWj32zIwAxOqZJIdH4x4lP8"></iframe>
             
                <div className="descripcion">
                    <p>En React Dent contamos con un equipo de los mejores profesionales y unas instalaciones equipadas con los últimos avances tecnológicos. Somos especialistas en odontología mínimamente invasiva; trabajamos para mantener y cuidar tus dientes respetando siempre los sistemas naturales bucodentales.</p>
                    <p className="emphasys">Queremos ser tu dentista de confianza en Valencia.</p>
                    <div className="separator"></div>
                    <div className="tratamientos">
                        <p className="emphasys">CONSULTAS Y PRUEBAS PRESENCIALES</p>
                        <h2>Consultas, pruebas y tratamientos al mejor precio.</h2>
                        <br></br>
                        <div className="coleccionespecialidades">
                            <div className='vistaDivEspecialidades'>
                                <div className= "especialidad">
                                <img src={implante} />
                                </div>
                                <h3>Implantes</h3>
                                <p>Un implante dental es una raíz de titanio que se coloca como soporte para sustituir dientes que el paciente ha perdido.</p>
                                
                            </div>
                            <div className='vistaDivEspecialidades'>
                                <div className="especialidad">
                                <img src={protesis} />
                                </div>
                                <h3>Prótesis</h3>
                                <p>Las prótesis dentales son los dientes postizos que sustituyen a los dientes naturales. Suplen uno o varios dientes.</p>

                            </div>
                            <div className='vistaDivEspecialidades'>
                                <div className="especialidad">
                                    <img src={endodoncia} />
                                </div>
                                <h3>Endodoncia</h3>
                                <p>Es un tratamiento necesario de realizar cuando en un diente tenemos una infección o una pulpitis irreversible.</p>
                            </div>
                            <div className='vistaDivEspecialidades'>
                                <div className="especialidad">
                                <img src={ortodoncia} />
                                </div>
                                <h3>Ortodoncia</h3>
                                <p>La ortodoncia es una especialidad de la odontología que corrige la malposición de los dientes para colocarlos en su lugar correcto.</p>
                            </div>
                            <div className='vistaDivEspecialidades'>
                                <div className="especialidad">
                                <img src={cirugia} />
                                </div>
                                <h3>Cirugía Oral</h3>
                                <p>Encargada del diagnóstico, prevención y a veces, tratamiento de las patologías orales.</p>
                            </div>
                            <div className='vistaDivEspecialidades'>
                                <div className="especialidad">
                                    <img src={Odontopediatria} alt=""/>
                                </div>
                                <h3>Odontopediatria</h3>
                                <p>Es la especialidad de la odontología que se encarga del cuidado de la salud bucodental del niño desde que nace hasta los 16 años.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vistaClinica"></div>
            </main>

            <footer className='vistaFooter'>
               <div className="politica">
                   <p><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank">Política de privacidad - Términos y condiciones - Política de Cookies</a></p>
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