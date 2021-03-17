
import React from 'react';

import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {CLOSE_MENU} from '../../redux/types';

const LeftMenu = (props) => {

    let history = useHistory();

    const route = (goto) => {
        hideMenu();
        history.push(goto);
    }

    const hideMenu = () => {
        props.dispatch({type : CLOSE_MENU});
    }

    const logout = () => {
        localStorage.removeItem('credentials');
        history.push('/');
    }
    
    let classes = {
        container: 'LMContainer',
        under: 'LMUnder',
        profile: 'LMItem',
        myappointments: 'LMItem',
        newappointment: 'LMItem'
    }
    if (props.menu?.visible) {
        classes.container += ' show';
        classes.under += ' show';
    }
    switch (history.location.pathname) {
        case '/profile':
        case '/admin':
            classes.profile += ' selected';
            break;
        case '/profile/my-appointments':
        case '/admin/all-appointments':
            classes.myappointments += ' selected';
            break;
        case '/profile/new-appointment':
        case '/admin/create-appointment':
            classes.newappointment += ' selected';
            break;
    }
    let labels = {
        profile: 'Mi perfil',
        myappointments: 'Mis citas',
        newappointment: 'Pedir cita'
    }
    let routes = {
        profile: '/profile',
        myappointments: '/profile/my-appointments',
        newappointment: '/profile/new-appointment'
    }
    if (history.location.pathname.split('/')[1] == 'admin') {
        labels = {
            profile: 'Panel',
            myappointments: 'Todas las citas',
            newappointment: 'Nueva cita'
        }
        routes = {
            profile: '/admin',
            myappointments: '/admin/all-appointments',
            newappointment: '/admin/create-appointment'
        }
    }


    return(
        <>
        <div className={classes.container}>
            <div className="logo"></div>
            <div className={classes.profile} onClick={()=>route(routes.profile)}>
                <div className="select"></div>
                <div className="LMItemTitle">{labels.profile}</div>
            </div>
            <div className={classes.myappointments} onClick={()=>route(routes.myappointments)}>
                <div className="select"></div>
                <div className="LMItemTitle">{labels.myappointments}</div>
            </div>
            <div className={classes.newappointment} onClick={()=>route(routes.newappointment)}>
                <div className="select"></div>
                <div className="LMItemTitle">{labels.newappointment}</div>
            </div>
            <div className="LMItem" onClick={logout}>
                <div className="select"></div>
                <div className="LMItemTitle">Cerrar sesión</div>
            </div>
        </div>
        <div className={classes.under} onClick={()=>{hideMenu();}}></div>
        </>
    )
}

export default connect((state)=>({menu:state.menu}))(LeftMenu);