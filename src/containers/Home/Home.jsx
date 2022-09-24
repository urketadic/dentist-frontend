import React from 'react';
import CTAButton from '../../components/CTAButton/CTAButton';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import implante from '../../img/implante.png';
import '../Home/Home.scss';
import ortodoncia from '../../img/ortodoncia.png';
import protesis from '../../img/protesis.png';
import endodoncia from '../../img/endodoncia.png';
import Odontopediatria from '../../img/odontopediatria.png';
import cirugia from '../../img/cirugia.png';
import BeforeAfter from '../../components/BeforeAfter/BeforeAfter';

const Home =()=>{

    return(
        <div className='vistaHome'>
            
            <Header home="true"></Header>
                
            <main className='vistaMain'>
                <div className="sloganContainer">
                    <div className="slogan">
                        <div className="sloganText">
                            <h2>¿Treba vam zubar?<br/>
                            <span className="reacciona">Savršenstvo</span>  je naš standard. </h2>
                            Pozovite nas ili zakažite termin onlajn.
                            <div className="buttonContainer">
                                <CTAButton text="060 687 2411" phone={true} goto={false} style={{marginRight: '0.5em'}}></CTAButton>
                                <CTAButton text="Onlajn zakazivanje" goto="register"></CTAButton>
                            </div>
                        </div>
                        <div className="dentist">
                        </div>
                    </div>
                </div>
                <iframe className="gMap" style={{border:0}}
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1691.1739379909784!2d19.22257906968555!3d44.53145123339046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb5f5e79e5e563bc5!2sTr%C5%BEni%20centar%20Vo%C4%87ar%20City!5e0!3m2!1sen!2sde!4v1663258322221!5m2!1sen!2sde"></iframe>
             
                <div className="descripcion">
                <h2>PRE I POSLE</h2>
                    <p className="emphasys">Imamo tim najboljih specijalista i opreme sa najnovijom tehnologijom. Ispod možete videti pre i posle slike nekih naših pacijenata.</p>
                    <BeforeAfter />
                    <p>Za vise slika možete posetiti <a href='https://www.instagram.com/dr.vanja.ljubinkovic'>Instagram</a> ili <a href='https://www.facebook.com/dr.vanja.stepanovic'>Facebook</a> </p>

                    <div className="separator"></div>
                    <div className="tratamientos">

                        <h2 style={{textAlign: 'center'}}>SERVISI</h2>
                        <p className="emphasys">Konsultacije su besplatne, za bilo kakvo pitanje možete nam poslati poruku u donjem desnom uglu ili nas pozvati.</p>
                        <br></br>
                        <div className="coleccionespecialidades">
                            <div className='vistaDivEspecialidades'>
                                <div className= "especialidad">
                                <img src={implante} />
                                </div>
                                <h3>Implanti</h3>
                                <p>Zubni implant je titanijumski koren koji se postavlja kao oslonac za zamenu zuba koji je pacijent izgubio.</p>
                                
                            </div>
                            <div className='vistaDivEspecialidades'>
                                <div className="especialidad">
                                <img src={protesis} />
                                </div>
                                <h3>Proteze</h3>
                                <p>Zubne proteze su lažni zubi koji zamenjuju prirodne zube. Mogu da zamene jedan ili više zuba.</p>

                            </div>
                            <div className='vistaDivEspecialidades'>
                                <div className="especialidad">
                                    <img src={endodoncia} />
                                </div>
                                <h3>Endodoncija</h3>
                                <p>Neophodan tretman kada pacijent ima infekciju ili ireverzibilni pulpitis zuba.</p>
                            </div>
                            <div className='vistaDivEspecialidades'>
                                <div className="especialidad">
                                <img src={ortodoncia} />
                                </div>
                                <h3>Ortodoncija</h3>
                                <p>Oblast stomatologije koja ispravlja nepravilan položaj zuba kako bi se postavili na svoje pravo mesto.</p>
                            </div>
                            <div className='vistaDivEspecialidades'>
                                <div className="especialidad">
                                <img src={cirugia} />
                                </div>
                                <h3>Oralna hirurgija</h3>
                                <p>Dijagnoza, prevencija i ponekad lečenje oralnih patologija..</p>
                            </div>
                            <div className='vistaDivEspecialidades'>
                                <div className="especialidad">
                                    <img src={Odontopediatria} alt=""/>
                                </div>
                                <h3>Pedijatrijska stomatologija</h3>
                                <p>Oblast stomatologije koja je zadužena za oralnu negu dece od rođenja do 16 godina.</p>
                            </div>
                        </div>
                    </div>
                    <CTAButton text="Cenovnik" goto="cenovnik"></CTAButton>
                </div>
                <div className="vistaClinica"></div>
            </main>

        <Footer/>
        </div>
    )
}

export default Home;