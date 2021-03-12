import React from 'react';
import CTAButton from '../CTAButton/CTAButton'
import Avatar from '../Avatar/Avatar';
import {useHistory} from 'react-router-dom';


const Header = (props)=>{

    let history = useHistory();

    let credentials = JSON.parse(localStorage.getItem('credentials'));

    let right;
    let logoClasses = 'logo';
    if (props.home == 'true') {
        right = <CTAButton goto="login" text="Entrar o registrarte" styling="CTA"/>;
        logoClasses = 'logo collapse';
    }

    if (credentials) {
        right = <Avatar name={credentials.user.name} goto="profile"></Avatar>
        logoClasses = 'logo collapse';
    }

    const goHome = () => {
        history.push('/');
    }

    return(
        <header>
            <div className='headerContainer'>
                
                <div className={logoClasses} onClick={goHome}></div>

                {right}
            
            </div>
        </header>
    )
}

export default Header;