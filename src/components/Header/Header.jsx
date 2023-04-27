import React from 'react';
import CTAButton from '../CTAButton/CTAButton'
import Avatar from '../Avatar/Avatar';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {OPEN_MENU} from '../../redux/types';
import { useTranslation } from "react-i18next";
import rsFlag from './RS.png';
import gbFlag from './GB.png';


const Header = (props)=>{

    const { t, i18n } = useTranslation();
    let history = useHistory();
    let credentials =props.credentials;


   // let credentials = JSON.parse(localStorage.getItem('credentials'));

   const switchLanguage = () => {
    const newLang = i18n.language === "rs" ? "en" : "rs";
    i18n.changeLanguage(newLang);
  };

  const isSelected = (lang) => {
    return i18n.language === lang;
  };


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
        // right = <CTAButton goto="login" text="Login" styling="CTA"/>;
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
                <CTAButton text={t("cenovnik")} goto="cenovnik"></CTAButton>


                <div className="language-switcher">
                    <button
                    className={isSelected("rs") ? "selected" : ""}
                    onClick={() => switchLanguage("rs")}
                    >
                    <img src={rsFlag} alt="RS Flag" /> RS
                    </button>
                    <button
                    className={isSelected("en") ? "selected" : ""}
                    onClick={() => switchLanguage("en")}
                    >
                    <img src={gbFlag} alt="GBFlag" /> EN
                    </button>
                </div>

            </div>
        </header>
    )
}

export default connect((state)=>({credentials:state.credentials,menu:state.menu}))(Header);