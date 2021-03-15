
import React from 'react';

import {useHistory} from 'react-router-dom';

const LeftMenu = (props) => {

    let history = useHistory();

    const route = (goto) => {
        history.push(goto);
    }

    const logout = () => {
        localStorage.removeItem('credentials');
        history.push('/');
    }
    
    let classes = {
        profile: 'LMItem',
        myappointments: 'LMItem',
        newappointment: 'LMItem'
    }
    switch (history.location.pathname) {
        case '/profile':
            classes.profile += ' selected';
            break;
        case '/profile/my-appointments':
            classes.myappointments += ' selected';
            break;
        case '/profile/new-appointment':
            classes.newappointment += ' selected';
            break;
    }

    return(
        <div className="LMContainer">
            <div className={classes.profile} onClick={()=>route('/profile')}>
                <div className="select"></div>
                <div className="LMItemTitle">Mi perfil</div>
            </div>
            <div className={classes.myappointments} onClick={()=>route('/profile/my-appointments')}>
                <div className="select"></div>
                <div className="LMItemTitle">Mis citas</div>
            </div>
            <div className={classes.newappointment} onClick={()=>route('/profile/new-appointment')}>
                <div className="select"></div>
                <div className="LMItemTitle">Pedir cita</div>
            </div>
            <div className="LMItem" onClick={logout}>
                <div className="select"></div>
                <div className="LMItemTitle">Cerrar sesión</div>
            </div>
        </div>
    )
}

export default LeftMenu;