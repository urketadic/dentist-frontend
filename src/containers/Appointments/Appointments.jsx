import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Message from '../../components/Message/Message';
import Loading from '../../components/Loading/Loading';
import Switch from '../../components/Switch/Switch';
import {connect} from 'react-redux';



const Appointments = (props) => {

    let history = useHistory();
    let credentials=props.credentials;
    //let credentials = JSON.parse(localStorage.getItem('credentials'));

    if(!credentials.user?.id) history.push('/login');

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState([]);
    const [pending, setPending] = useState(false);
    
    useEffect(()=>{
        fetchAppointments();
    },[]);

    useEffect(()=>{
        if (pending) fetchAppointments('?pending=true');
        else fetchAppointments();
    },[pending]);

    const togglePending = () => {
        setPending(!pending);
    }

    const fetchAppointments = (query = '') => {
        setLoading(true);
        setTimeout(()=>{
            axios.get(`http://localhost:3001/users/${credentials.user.id}/appointments${query}`,{headers:{'authorization':'Bearer ' + credentials.token}})
            .then(handleResponse)
            .catch((err)=>{handleResponse({data:{message:'Error de conexión.'}})});
        },500);
    }
    
    const handleResponse = (response) => {
        if (response.status == 200) {
            setLoading(false);
            setAppointments(response.data);
        } else {
            setLoading(false);
            newMessage(response.data.message);
        }
    }

    const newMessage = (msg, style = 'error') => {
        const key = (~(Math.random()*999999999));
        setMessage([...message,<Message key={key} text={msg} style={style}></Message>]);
    }

    const mapDentist = (id) => {
        switch (id) {
            case 1:
                return 'Dr. Iglesias Fornes David';
            case 2:
                return 'Dra. Flores Marín Lorena';
            case 3:
                return 'Dr. Zemmari Kissani Tarik';
            case 4:
                return 'Dra. Sanz Iglesias Noemi';
        }
    }

    const cancelAppointment = (id) => {
        let confirmed = window.confirm('¿Seguro que desea cancelar la cita?');
        if (confirmed) {
            setLoading(true);
            setTimeout(()=>{
                axios.delete(`http://localhost:3001/users/${credentials.user.id}/appointments/${id}`,{headers:{'authorization':'Bearer ' + credentials.token}})
                .then(()=>axios.get(`http://localhost:3001/users/${credentials.user.id}/appointments`,{headers:{'authorization':'Bearer ' + credentials.token}}))
                .then(handleResponse)
                .then(()=>{newMessage('Cita cancelada con éxito','success')})
                .catch((err)=>{handleResponse({data:{message:'Error de conexión.'}})});
            },500);
        }
    }

    return (
        <>
        <Header></Header>
        <section className="appointmentsContainer">
            <LeftMenu></LeftMenu>
            <div className="appointments">
                {message}
                <Loading visible={loading}></Loading>
                <div className="titleContainer">
                    <div className="titulo">Mis citas</div>
                    <Switch label='Próximas' checked={pending} onClick={()=>{togglePending();}}></Switch>
                </div>
                {appointments.map((appointment)=>{
                    const key = (~(Math.random()*999999999));
                    let dentist = mapDentist(appointment.dentistId) || 'Sin asignar';
                    let cancel;
                    if (moment(appointment.date).diff(new Date) > 0)
                    cancel = <div id={appointment.id} onClick={(e)=>{cancelAppointment(e.target.id)}} className="cancel">Cancelar cita</div>;
                    return(
                        <div key={key} className="appointment">
                            <div className="date">
                                <div>{moment(appointment.date).format('D/M/Y')}</div>
                                <div>{moment(appointment.date).format('H:mm')}</div>
                            </div>
                            <div className="data">
                                <div className="row">
                                    <div className="title">Dentista:</div>
                                    <div className="datum">{dentist}</div>
                                </div>
                                <div className="row">
                                    <div className="title">Comentarios:</div>
                                    <div className="datum">{appointment.comment}</div>
                                </div>
                            </div>
                            {cancel}
                        </div>
                    );
                })}
            </div>
        </section>
        <footer>
            
        </footer>
        </>
    )
}

export default connect((state)=>({credentials:state.credentials}))(Appointments);