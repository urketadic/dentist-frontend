import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import validate from "../../tools/validate";
import axios from "axios";
import CTAButton from "../../components/CTAButton/CTAButton";
import FormInput from "../../components/FormInput/FormInput";
import { Form } from 'antd';
import "./Register.scss";
import Loading from "../../components/Loading/Loading";
import Message from "../../components/Message/Message";
import {connect} from 'react-redux';
import {QUEUE_MESSAGE} from '../../redux/types';

const Register = (props) => {

  let history = useHistory();
    
  const cred = props.credentials;
  //localStorage.getItem('credentials');
  if (cred.user?.id)
  if (cred.user.admin) history.push('/admin')
  else history.push('/profile');

  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
    address: "",
    nif: "",
    born: "",
    phone: "",
    passwordValidation: ""
  });

  const [message, setMessage] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Manejar el estado

  const updateUser = (key, value) => {
    setUser({ ...user, [key]: value });
    if (Object.keys(errors).length > 0) setErrors(validate({ ...user, [key]: value }, "register"));
  };

  // Envio de datos del registro

  const sendData = async () => {
    const errs = validate(user, "register");
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    let userData = {
      email: user.email,
      password: user.password,
      name: user.name,
      lastname: user.lastname,
      address: user.address,
      nif: user.nif,
      born: user.born,
      phone: user.phone,
    };

    setLoading(true);
    setTimeout(() => {
      axios
        .post("https://reactdent-b.herokuapp.com/users", userData)
        .then(handleResponse)
        .catch((err) => {
          handleResponse({ data: { message: "Error de conexión." } });
        });
    }, 500);
  };

  const handleResponse = (response) => {
    if (response.status == 200) {
      props.dispatch({type:QUEUE_MESSAGE, payload:{text:"Registrado exitosamente. Ya puede iniciar sesión.",type:'success'}});
      history.push("/login");
    } else {
      setLoading(false);
      newMessage(response.data.message);
    }
  };

  const newMessage = (msg) => {
    const key = ~(Math.random() * 99999);
    setMessage([...message, <Message key={key} text={msg}></Message>]);
  };

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        sendData();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [user]);

  return (
    <>
      <Header></Header>
      <Loading visible={loading}></Loading>
      <div className="registerContainer">
        {message}
        <div className="registerForm">
            <h2>Forma za registraciju</h2>
            <p>Kreiranje naloga omogućava pregled postojećih termina i automatizovano zakazivanje novih bez potrebe da nas zovete.</p>

            <div className="inputContainer twocols">
                <Form.Item validateStatus={errors.name?.status} help={errors.name?.help}>
                    <FormInput label="Ime" name="name" onChange={updateUser} />
                </Form.Item>
                <Form.Item validateStatus={errors.lastname?.status} help={errors.lastname?.help}>
                    <FormInput label="Prezime" name="lastname" onChange={updateUser} />
                </Form.Item>
            </div>
            <div className="inputContainer">
                <Form.Item validateStatus={errors.address?.status} help={errors.address?.help}>
                    <FormInput label="Adresa" name="address" onChange={updateUser} />
                </Form.Item>
            </div>
            <div className="inputContainer twocols">
                <Form.Item validateStatus={errors.phone?.status} help={errors.phone?.help}>
                    <FormInput label="Telefon" name="phone" onChange={updateUser} />
                </Form.Item>
                <Form.Item validateStatus={errors.born?.status} help={errors.born?.help}>
                    <FormInput label="Datum Rodjenja" name="born" onChange={updateUser} />
                </Form.Item>
            </div>
            <div className="inputContainer twocols">
                <Form.Item validateStatus={errors.email?.status} help={errors.email?.help}>
                    <FormInput label="Email" name="email" onChange={updateUser}/>
                </Form.Item>
                <Form.Item validateStatus={errors.nif?.status} help={errors.nif?.help}>
                    <FormInput label="Identifikacioni dokument" name="nif" onChange={updateUser} />
                </Form.Item>
            </div>
            <div className="inputContainer twocols">
                <Form.Item validateStatus={errors.password?.status} help={errors.password?.help}>
                    <FormInput type="Password" label="Lozinka" name="password" onChange={updateUser} />
                </Form.Item>
                <Form.Item validateStatus={errors.passwordValidation?.status} help={errors.passwordValidation?.help}>
                    <FormInput type="Password" label="Potvrdite lozinku" name="passwordValidation" onChange={updateUser} />
                </Form.Item>
            </div>
            <div className="buttonContainer">
                <CTAButton goto="login" text="Već imam nalog" styling="CTA" />
                <CTAButton text="Posalji" onClick={() => sendData()}/>
            </div>
        </div>
      </div>
    </>
  );
};

export default connect((state)=>({credentials: state.credentials,queuedmessage:state.message}))(Register);
