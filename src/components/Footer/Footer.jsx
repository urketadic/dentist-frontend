import React from 'react';
import './Footer.scss';

const Footer = (props) => {


    let today = new Date();
    let day = today.getDay();
    let hour = today.getHours();

    const result = () => {
        if ( day >= 1 && day < 6) {
            if (hour >= 9 && hour < 17) {
                return <p> Danas smo <span style={{color:"green"}}> otvoreni </span> do 17h. </p>
            }
        }

        if (day == 6) {
            if (hour >=9 && hour < 14) {
                return <p> Danas smo <span style={{color:"green"}}> otvoreni </span> do 14h.</p>
            }
        }

        if (day == 7) {
            return <p> Nedeljom smo <span style={{color:"red"}}> zatvoreni </span> </p>
        }

        else {
            return <p> Trenutno smo <span style={{color:"red"}}> zatvoreni </span></p>
        }
    }

    return (
        <footer className='Footer'>

            <div className='FooterContent'>
            
                <div className="workinghours">
                    <h3>Radno vreme</h3> 

                    {result()}

                    <div style={{textAlign:"justify"}}>
                        <p style={{margin: '0px'}}>Radni dani:  09h do 17h</p>
                        <p style={{margin: '0px'}}>Subota: 09h do 14h</p>
                    </div>
                </div>


                <div className="adress">

                    <h3>Kontakt</h3>

                    <div>
                        <div style={{textAlign:"justify"}}>
                            <p style={{margin: '0px'}}>TELEFON: <a href="tel:+381656360334">065 636 0334</a></p>
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









