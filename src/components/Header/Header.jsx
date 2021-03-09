import React from 'react';
import './Header.css';
import CTAButton from '../CTAButton/CTAButton'


const Header = (props)=>{

    let right;
    let logoClasses = 'logo';
    if (props.home == 'true') {
        right = <CTAButton goto="login" text="Entrar o registrarte" styling="CTA"/>;
        logoClasses += ' collapse';
    }

    return(
        <header>
            <div className='headerContainer'>
                
                <div className={logoClasses}></div>

                {right}
            
            </div>
        </header>
    )
}

export default Header;