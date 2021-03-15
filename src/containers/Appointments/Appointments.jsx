import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Message from '../../components/Message/Message';
import Loading from '../../components/Loading/Loading';
import './Appointments.scss';



const Appointments = (props) => {

    let history = useHistory();
    
    let credentials = JSON.parse(localStorage.getItem('credentials'));

    if(!credentials) history.push('/login');

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState([]);
    
    useEffect(()=>{
        fetchAppointments();
    },[]);

    const fetchAppointments = () => {
        setLoading(true);
        setTimeout(()=>{
            axios.get(`http://localhost:3001/users/${credentials.user.id}/appointments`,{headers:{'authorization':'Bearer ' + credentials.token}})
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

    return (
        <>
        <Header></Header>
        <section className="appointmentsContainer">
            {message}
            <LeftMenu></LeftMenu>
            <div className="appointments">
                <Loading visible={loading}></Loading>
                <div className="titulo">Mis citas</div>
                {appointments.map((appointment)=>{
                    const key = (~(Math.random()*999999999));
                    return(
                        <div key={key} className="appointment">
                            <div className="date">
                                {appointment.date}
                            </div>
                            <div className="comment">
                                {appointment.comment}
                            </div>
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

export default Appointments;