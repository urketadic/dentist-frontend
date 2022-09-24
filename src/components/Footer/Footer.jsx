import React from 'react';
import './Footer.scss';

const Footer = (props) => {


    let today = new Date();
    let hour = today.getHours();

    return (
        <footer className='Footer'>

            <div className='FooterContent'>
            
                <div className="workinghours">
                    <h3>Radno vreme</h3> 

                    <p> Trenutno smo {hour >=8 && hour < 20 ? <span style={{color:"green"}}>otvoreni</span> : <span style={{color:"red"}}>zatvoreni</span>}</p>

                    <div style={{textAlign:"justify"}}>
                        <p style={{margin: '0px'}}>Otvoreno od 08h do 20h</p>
                    </div>
                </div>


                <div className="adress">

                    <h3>Kontakt</h3>

                    <div>
                        <div style={{textAlign:"justify"}}>
                            <p style={{margin: '0px'}}>TELEFON: <a href="tel:+381606872411">060 687 2411</a></p>
                            <p style={{margin: '0'}}>E-MAIL: <a href="mailto:dr.vanja.stepanovic@gmail.com">dr.vanja.stepanovic@gmail.com</a></p>
                            <p style={{marginTop: '0'}}>LIVE CHAT: 💬 u donjem desnom uglu sajta</p>
                       

                        <p><a href='https://www.instagram.com/dr.vanja.ljubinkovic/' target="_blank"><i className="fa-brands fa-facebook"></i> </a>   <a href='https://www.facebook.com/dr.vanja.stepanovic' target="_blank"><i className="fa-brands fa-square-instagram"></i> </a>  
                        <a href='https://www.youtube.com/channel/UCwzZo7LiUC9KivMKc-VgBQg/featured' target="_blank"><i className="fa-brands fa-youtube"></i> </a> </p>

                        </div>
                        
                    </div>
               
                </div>

                <div className="contact">

                    <h3>Lokacija</h3>
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









