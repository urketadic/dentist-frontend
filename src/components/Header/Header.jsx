import React from 'react';
import CTAButton from '../CTAButton/CTAButton'
import Avatar from '../Avatar/Avatar';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {OPEN_MENU} from '../../redux/types';



const Header = (props)=>{

    let history = useHistory();
    let credentials =props.credentials;

   // let credentials = JSON.parse(localStorage.getItem('credentials'));


    const goHome = () => {
        history.push('/');
    }

    const showMenu = () => {
        props.dispatch({type : OPEN_MENU});
    }

    let right;
    let left;
    let logoClasses = 'logo';
    if (props.home === 'true') {
        right = <CTAButton goto="login" text="Login" styling="CTA"/>;
        logoClasses = 'logo collapse';
    } else {
        left = <div className="menu" onClick={()=>{showMenu();}}><div></div><div></div><div></div></div>
    }

    if (credentials.user?.id) {
        if (credentials.user.admin) right = <Avatar name={credentials.user.name} color='#444' goto="admin"></Avatar>
        else right = <Avatar name={credentials.user.name} goto="profile"></Avatar>
        logoClasses = 'logo collapse';
    }


    return(
        <header>
            <div className='headerContainer'>
                
                <div className="menulogo">
                    {left}
                    <div className={logoClasses} onClick={goHome}></div>
                </div>

                {right}
            
            </div>
        </header>
    )
}

export default connect((state)=>({credentials:state.credentials,menu:state.menu}))(Header);