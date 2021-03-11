import React from 'react';
import CTAButton from '../../components/CTAButton/CTAButton';
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import {useHistory} from 'react-router-dom';

import './Profile.scss';



const Profile = (props) => {

    let history = useHistory();
    
    let credentials = JSON.parse(localStorage.getItem('credentials'));

    if(!credentials) history.push('/login');

    return (
        <>
        <Header></Header>
        <section className="profileContainer">
            <LeftMenu></LeftMenu>
            <div className="profile">
                <div className="bienvenida">Bienvenido, {credentials.user.name}.</div>
            </div>
        </section>
        <footer>
            
        </footer>
        </>
    )
}

export default Profile;