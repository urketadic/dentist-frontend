import React, { useEffect, useState } from "react";
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
        .post("http://localhost:3001/users", userData)
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

  return (
    <>
      <Header></Header>
      <Loading visible={loading}></Loading>
      <div className="registerContainer">
        {message}
        <div className="registerForm">
            <h2>Regístrate gratis en React Dent</h2>
            <p>Crea tu cuenta ahora y pide cita para disfrutar de la mejor atención odontológica en Valencia.</p>

            <div className="inputContainer twocols">
                <Form.Item validateStatus={errors.name?.status} help={errors.name?.help}>
                    <FormInput label="Nombre" name="name" onChange={updateUser} />
                </Form.Item>
                <Form.Item validateStatus={errors.lastname?.status} help={errors.lastname?.help}>
                    <FormInput label="Apellidos" name="lastname" onChange={updateUser} />
                </Form.Item>
            </div>
            <div className="inputContainer">
                <Form.Item validateStatus={errors.address?.status} help={errors.address?.help}>
                    <FormInput label="Dirección" name="address" onChange={updateUser} />
                </Form.Item>
            </div>
            <div className="inputContainer twocols">
                <Form.Item validateStatus={errors.phone?.status} help={errors.phone?.help}>
                    <FormInput label="Telefono" name="phone" onChange={updateUser} />
                </Form.Item>
                <Form.Item validateStatus={errors.born?.status} help={errors.born?.help}>
                    <FormInput label="Fecha de nacimiento" name="born" onChange={updateUser} />
                </Form.Item>
            </div>
            <div className="inputContainer twocols">
                <Form.Item validateStatus={errors.email?.status} help={errors.email?.help}>
                    <FormInput label="Correo Electrónico" name="email" onChange={updateUser}/>
                </Form.Item>
                <Form.Item validateStatus={errors.nif?.status} help={errors.nif?.help}>
                    <FormInput label="Documento de identidad" name="nif" onChange={updateUser} />
                </Form.Item>
            </div>
            <div className="inputContainer twocols">
                <Form.Item validateStatus={errors.password?.status} help={errors.password?.help}>
                    <FormInput type="Password" label="Contraseña" name="password" onChange={updateUser} />
                </Form.Item>
                <Form.Item validateStatus={errors.passwordValidation?.status} help={errors.passwordValidation?.help}>
                    <FormInput type="Password" label="Repita la Contraseña" name="passwordValidation" onChange={updateUser} />
                </Form.Item>
            </div>
            <div className="buttonContainer">
                <CTAButton text="Enviar" onClick={() => sendData()}/>
            </div>
        </div>
      </div>
    </>
  );
};

export default connect((state)=>({queuedmessage:state.message}))(Register);
