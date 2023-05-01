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
import { useTranslation } from "react-i18next";

const Home =({ theme, toggleTheme })=>{

    const { t, i18n } = useTranslation();

    const darkTheme = {
        topsection: {
          backgroundColor: "#212121",
          color: 'white'
        },
        bottomsection: {
          backgroundColor: "#212121",
          color: 'white'
        },
        googlemaps: {
            filter: 'grayscale(75%)',
            border: 0
        },
        text: {
            color: 'white'
        }
      };

    return(
        <div className='vistaHome'>
            
            <Header home="true"></Header>
                
            <main className='vistaMain' style={theme === "dark" ? darkTheme.bottomsection : {}}>
                <div className="sloganContainer" style={theme === "dark" ? darkTheme.topsection : {}} >
                    <div className="slogan">
                        <div className="sloganText">
                            <h2>{t("question")}<br/>
                            <span className="reacciona">{t("perfection")}</span>  {t("standard")} </h2>
                            {t("callus")}
                            <div className="buttonContainer">
                                <CTAButton text="065 687 0334" phone={true} goto={false} style={{marginRight: '0.5em'}}></CTAButton>
                                <CTAButton text= {t("onlinechat")} chat={true} goto={false} style={{marginRight: '0.5em'}}></CTAButton>
                                <CTAButton text={t("profile")} disabled={true} goto={false}></CTAButton>
                            </div>
                        </div>
                        <div className="dentist">
                        </div>
                    </div>
                </div>
                <iframe  className="gMap" style={theme === "dark" ? darkTheme.googlemaps : {border: 0}}
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d845.5863983264421!2d19.22241007222942!3d44.53149053876247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x445d03510ef75485!2sZubar%20Loznica%20-%20Stomatolo%C5%A1ka%20Ordinacija%20Dr%20Vanja!5e0!3m2!1sen!2sde!4v1674406315220!5m2!1sen!2sde"></iframe>

             
                <div className="descripcion">
                <h2>{t("bna")}</h2>
                    <p className="emphasys" style={theme === "dark" ? darkTheme.text : {}}>{t("bnatext")}.</p>
                    <BeforeAfter />
                    <p style={theme === "dark" ? darkTheme.text : {}}>{t("formore")}<a href='https://www.instagram.com/dr.vanja.ljubinkovic'>Instagram</a> {t("or")} <a href='https://www.facebook.com/dr.vanja.stepanovic'>Facebook</a> </p>

                    <div className="separator" style={theme === "dark" ? darkTheme.text : {}}></div>
                    <div className="tratamientos">

                        <h2 style={{textAlign: 'center'}}>{t("services")}</h2>
                        <p className="emphasys" style={theme === "dark" ? darkTheme.text : {}}>{t("consultation")}.</p>
                        <br></br>
                        <div className="coleccionespecialidades">
                            <div className='vistaDivEspecialidades'>
                                <div className= "especialidad">
                                <img src={implante} />
                                </div>
                                <h3>{t("implants")}</h3>
                                <p>{t("implantstext")}.</p>
                                
                            </div>
                            <div className='vistaDivEspecialidades'>
                                <div className="especialidad">
                                <img src={protesis} />
                                </div>
                                <h3>{t("proteze")}</h3>
                                <p>{t("protezetext")}.</p>

                            </div>
                            <div className='vistaDivEspecialidades'>
                                <div className="especialidad">
                                    <img src={endodoncia} />
                                </div>
                                <h3>{t("endodoncija")}</h3>
                                <p>{t("endodoncijatext")}</p>
                            </div>
                            <div className='vistaDivEspecialidades'>
                                <div className="especialidad">
                                <img src={ortodoncia} />
                                </div>
                                <h3>{t("ortodoncija")}</h3>
                                <p>{t("ortodoncijatext")}.</p>
                            </div>
                            <div className='vistaDivEspecialidades'>
                                <div className="especialidad">
                                <img src={cirugia} />
                                </div>
                                <h3>{t("oralnahirurgija")}</h3>
                                <p>{t("oralnahirurgijatext")}</p>
                            </div>
                            <div className='vistaDivEspecialidades'>
                                <div className="especialidad">
                                    <img src={Odontopediatria} alt=""/>
                                </div>
                                <h3>{t("decijastomatologija")}</h3>
                                <p>{t("decijastomatologijatext")}</p>
                            </div>
                        </div>
                    </div>
 
                </div>
                <div className="vistaClinica"></div>
            </main>

            <Footer />

        </div>
    )
}

export default Home;