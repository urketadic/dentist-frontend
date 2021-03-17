import React from 'react';
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import {useHistory} from 'react-router-dom';
import './Admin.scss';
import Avatar from '../../components/Avatar/Avatar'
import moment from 'moment'




const Admin = (props) => {

    let history = useHistory();
    
    let credentials = JSON.parse(localStorage.getItem('credentials'));

    if(!credentials) history.push('/login');
    if(!credentials.user.admin) history.push('/profile');

    return (
        <>
        <Header></Header>
        <section className="adminContainer">
            <LeftMenu></LeftMenu>
            <div className="admin">
                <div className="bienvenida">Panel de administrador</div>
            </div>
        </section>
        <footer>
            
        </footer>
        </>
    )
}

export default Admin;