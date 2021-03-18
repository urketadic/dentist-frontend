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
import DateTimePicker from "../../components/DateTimePicker/DateTimePicker";

const { Step } = Steps;

const Appointment = (props) => {
  let history = useHistory();
  let credentials = props.credentials;
  //let credentials = JSON.parse(localStorage.getItem('credentials'));

  if (!credentials.user?.id) history.push("/login");

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState([]);
  const [slots, setSlots] = useState([]);
  const [current, setCurrent] = useState(0);

  const [appointment, setAppointment] = useState({
    userId: credentials.user.id,
    dentistId: "",
    date: "",
    comment: "",
  });

  const fetchSlots = (query = "") => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(`http://localhost:3001/users/${credentials.user.id}/appointments/slots${query}`, { headers: { authorization: "Bearer " + credentials.token } })
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
    console.log(userId);
    let appointmentData = {
      dentistId: appointment.dentistId,
      date: appointment.date,
      comment: appointment.comment,
    };

    let endpointAppointments = `http://localhost:3001/users/${userId}/appointments`;

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
    setCurrent(1);
  }

  const setDate = (value) => {
    handler('date',value);
    setCurrent(2);
  }

  const dates = [
    ['2021-03-18T08:00:00.000000','2021-03-18T10:00:00.000000'],
    ['2021-03-19T08:00:00.000000','2021-03-19T10:00:00.000000'],
    ['2021-03-20T08:00:00.000000','2021-03-20T10:00:00.000000'],
    ['2021-03-21T08:00:00.000000','2021-03-21T10:00:00.000000'],
    ['2021-03-22T08:00:00.000000','2021-03-22T10:00:00.000000'],
    ['2021-03-23T08:00:00.000000','2021-03-23T10:00:00.000000'],
    ['2021-03-24T08:00:00.000000','2021-03-24T10:00:00.000000'],
    ['2021-03-25T08:00:00.000000','2021-03-25T10:00:00.000000'],
    ['2021-03-26T08:00:00.000000','2021-03-26T10:00:00.000000','2021-03-26T17:00:00.000000'],
    ['2021-03-27T08:00:00.000000','2021-03-27T10:00:00.000000'],
    ['2021-03-28T08:00:00.000000','2021-03-28T10:00:00.000000'],
    ['2021-03-29T08:00:00.000000','2021-03-29T10:00:00.000000']
  ];

  const steps = [
    {
      title: "Profesional",
      content:
      <div className='selectPro'>
        <h3>¿Con qué profesional?</h3>
        <div value="0" className="option" onClick={(e)=>{setDentist(e.target.value)}}>Asignar automáticamente<br/><small>(Más horarios disponibles)</small></div>
        <div value="1" className="option" onClick={(e)=>{setDentist(e.target.value)}}>{mapDentist(1)}</div>
        <div value="2" className="option" onClick={(e)=>{setDentist(e.target.value)}}>{mapDentist(2)}</div>
        <div value="3" className="option" onClick={(e)=>{setDentist(e.target.value)}}>{mapDentist(3)}</div>
        <div value="4" className="option" onClick={(e)=>{setDentist(e.target.value)}}>{mapDentist(4)}</div>
      </div>
      ,
    },
    {
      title: "Horario",
      content: <DateTimePicker handler={setDate} dates={dates}/>,
    },
    {
      title: "Confirmación",
      content: "Last-content",
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
            <div className="steps-content">{steps[current].content}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect((state) => ({ credentials: state.credentials }))(Appointment);
