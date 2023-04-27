import React from 'react';
import './Footer.scss';
import { useTranslation } from "react-i18next";

const Footer = (props) => {

    const { t, i18n } = useTranslation();
    let today = new Date();
    let day = today.getDay();
    let hour = today.getHours();

    const result = () => {
        if ( day >= 1 && day < 6) {
            if (hour >= 9 && hour < 17) {
                return <p> {t("danassmo")}<span style={{color:"green"}}> {t("otvoreni")} </span> do 17h. </p>
            }
        }

        if (day == 6) {
            if (hour >=9 && hour < 14) {
                return <p> {t("danassmo")}<span style={{color:"green"}}> {t("otvoreni")} </span> do 14h.</p>
            }
        }

        if (day == 7) {
            return <p> {t("nedeljom")}<span style={{color:"red"}}> {t("zatvoreni")} </span> </p>
        }

        else {
            return <p> {t("trenutnosmo")}<span style={{color:"red"}}>  {t("zatvoreni")} </span></p>
        }
    }

    return (
        <footer className='Footer'>

            <div className='FooterContent'>
            
                <div className="workinghours">
                    <h3>{t("radnovreme")}</h3> 

                    {result()}

                    <div style={{textAlign:"justify"}}>
                        <p style={{margin: '0px'}}>{t("radnidani")}  09h {t("do")} 17h</p>
                        <p style={{margin: '0px'}}>{t("subota")} 09h {t("do")} 14h</p>
                    </div>
                </div>


                <div className="adress">

                    <h3>{t("kontakt")}</h3>

                    <div>
                        <div style={{textAlign:"justify"}}>
                            <p style={{margin: '0px'}}>TELEFON: <a href="tel:+381656360334">065 636 0334</a></p>
                            <p style={{margin: '0'}}>E-MAIL: <a href="mailto:dr.vanja.stepanovic@gmail.com">dr.vanja.stepanovic@gmail.com</a></p>
                            <p style={{marginTop: '0'}}>LIVE CHAT: 💬 {t("donjiugao")}</p>
                       

                        <p><a href='https://www.facebook.com/dr.vanja.stepanovic' target="_blank"><i className="fa-brands fa-facebook"></i> </a>   <a href='https://www.instagram.com/dr.vanja.ljubinkovic/' target="_blank"><i className="fa-brands fa-square-instagram"></i> </a>  
                        <a href='https://www.youtube.com/channel/UCwzZo7LiUC9KivMKc-VgBQg/featured' target="_blank"><i className="fa-brands fa-youtube"></i> </a> </p>
                        
                        </div>
                        
                    </div>
               
                </div>

                <div className="contact">

                    <h3>{t("lokacija")}</h3>
                    <div style={{textAlign:"justify"}}>
                        <p>Loznica, Vojvode Mišića 2G </p>
                        <p>Tržni centar Voćar City</p>
                    </div>
                </div>

            </div>
       </footer>
              
        
    )
}

export default Footer;









