
import React from 'react';

import './LeftMenu.css';

import {useHistory} from 'react-router-dom';

const LeftMenu = (props) => {

    let history = useHistory();

    const route = (goto) => {
        history.push(`/profile${goto}`);
    }

    const logout = () => {
        localStorage.removeItem('credentials');
        history.push('/');
    }

    return(
        <div className="LMContainer">
            <div className="LMItem selected" onClick={()=>route('')}>
                <div className="select"></div>
                <div className="LMItemTitle">Mi perfil</div>
            </div>
            <div className="LMItem" onClick={()=>route('/my-appointments')}>
                <div className="select"></div>
                <div className="LMItemTitle">Mis citas</div>
            </div>
            <div className="LMItem" onClick={()=>route('/new-appointment')}>
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