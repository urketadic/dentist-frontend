import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router-dom";
//import CTAButton from '../../components/CTAButton/CTAButton'
import FormInput from "../../components/FormInput/FormInput";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import axios from "axios";
import { connect } from "react-redux";
import mapDentist from "../../tools/map-dentist";
import { QUEUE_MESSAGE } from "../../redux/types";
import { Steps } from "antd";
import "./Steps.css";
import Message from '../../components/Message/Message';
import Loading from '../../components/Loading/Loading';
import DateTimePicker from "../../components/DateTimePicker/DateTimePicker";
import { Input } from 'antd';
import CTAButton from "../../components/CTAButton/CTAButton";

const { TextArea } = Input;

const { Step } = Steps;


const Appointment = (props) => {

  let history = useHistory();
  let credentials = props.credentials;
  //let credentials = JSON.parse(localStorage.getItem('credentials'));

  if (!credentials.user?.id) history.push("/login");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState([]);
  const [slots, setSlots] = useState([]);
  const [current, setCurrent] = useState(0);

  const [appointment, setAppointment] = useState({
    userId: credentials.user.id,
    dentistId: "",
    date: "",
    comment: ""
  });

  const fetchSlots = (dentistId) => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(`https://reactdent-b.herokuapp.com/users/${credentials.user.id}/appointments/slots/${dentistId}`, { headers: { authorization: "Bearer " + credentials.token } })
        .then(handleSlotResponse)
        .catch((err) => {
          handleSlotResponse({ data: { message: "Error de conexión." } });
        });
    }, 500);
  };

  const handleSlotResponse = (response) => {
    if (response.status == 200) {
      setLoading(false);
      setSlots(response.data);
      setCurrent(1);
    } else {
      setLoading(false);
      newMessage(response.data.message);
    }
  };

  const newMessage = (msg, style = "error") => {
    const key = ~(Math.random() * 999999999);
    setMessage([...message, <Message key={key} text={msg} style={style}></Message>]);
  };

  const handler = (name, value) => {
    setAppointment({ ...appointment, [name]: value });
  };

  const sendData = async () => {
    let userId = credentials.user.id;
    
    let appointmentData = {
      dentistId: appointment.dentistId,
      date: appointment.date,
      comment: appointment.comment,
    };

    let endpointAppointments = `https://reactdent-b.herokuapp.com/users/${userId}/appointments`;

    let token = credentials.token;

    setLoading(true);
    setTimeout(() => {
      axios
        .post(endpointAppointments, appointmentData, { headers: { authorization: "Bearer " + token } })
        .then(handleResponse)
        .catch((err) => {
          handleResponse({ data: { message: "Error de conexión." } });
        });
    }, 500);
  };

  const handleResponse = (response) => {
    if (response.status == 200) {
      setLoading(false);
      props.dispatch({ type: QUEUE_MESSAGE, payload: { text: "Cita pedida con éxito.", type: "success" } });
      history.push("/profile/my-appointments");
    } else {
      setLoading(false);
      newMessage(response.data.message);
    }
  };

  const setDentist = (value) => {
    handler('dentistId',value);
    fetchSlots(value);
  }

  const setDate = (value) => {
    handler('date',value);
    setCurrent(2);
  }

  const date = new Date(appointment.date);
  let dateString = `${date.toLocaleDateString('es-es',{weekday:'long', day:'numeric', month:'long', year:'numeric'})} a las ${date.toLocaleTimeString('es-es',{hour:'numeric', minute:'numeric'})}h`;
  dateString = dateString.charAt(0).toUpperCase() + dateString.slice(1);

  const steps = [
    {
      title: "Profesional",
      content:
      <div className='selectPro'>
        <h3>¿Con qué profesional?</h3>
        <div value="1" className="option" onClick={()=>{setDentist(1)}}>{mapDentist(1)}</div>
        <div value="2" className="option" onClick={()=>{setDentist(2)}}>{mapDentist(2)}</div>
        <div value="3" className="option" onClick={()=>{setDentist(3)}}>{mapDentist(3)}</div>
        <div value="4" className="option" onClick={()=>{setDentist(4)}}>{mapDentist(4)}</div>
      </div>
    },
    {
      title: "Horario",
      content: 
      <>
      <div className="dentistDetails">
        <div>Citas disponibles para <span style={{fontWeight:500}}>{mapDentist(appointment.dentistId)}</span></div>
        <div className="back" onClick={()=>{setCurrent(0)}}>Cambiar</div>
      </div>
      <DateTimePicker handler={setDate} dates={slots}/>
      </>
    },
    {
      title: "Confirmación",
      content:
      <div className='confirm'>
        <div className="appointmentDetails">
          <div>
            <div className="appointmentTitle">Día y hora de tu cita</div>
            <div className="appointmentDate">{dateString}</div>
          </div>
          <div>
            <div className="back" onClick={()=>{setCurrent(1)}}>Editar</div>
          </div>
        </div>
        <div className="separator"></div>
        <div className="appointmentTitle">Motivo de la consulta</div>
        <TextArea placeholder='Escribe aquí el motivo de la consulta' onChange={(e)=>{handler('comment',e.target.value)}} rows={5}/>
        <div className="buttonContainer">
          <CTAButton onClick={sendData} text='Confirmar cita'/>
        </div>
      </div>
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Header></Header>
      <div className="container">
        <LeftMenu></LeftMenu>
        <div className="right">
          <div className="title">Nueva cita</div>
          <div className="form">
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">
              <Loading visible={loading}></Loading>
              {steps[current].content}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect((state) => ({ credentials: state.credentials }))(Appointment);
