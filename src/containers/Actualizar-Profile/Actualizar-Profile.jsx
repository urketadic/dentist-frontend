import React from 'react';
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import {useHistory} from 'react-router-dom';
import {useState , useEffect} from 'react';
import Avatar from '../../components/Avatar/Avatar'
import moment from 'moment'
import './Actualizar-Profile.scss'
import FormInput from '../../components/FormInput/FormInput';
import {connect} from 'react-redux';
import Loading from "../../components/Loading/Loading";
import Message from "../../components/Message/Message";
import validate from "../../tools/validate";
import axios from 'axios';
import { Form } from 'antd';
import {UPDATE_USER} from '../../redux/types';




const ActualizarProfile = (props) => {

    let history = useHistory();
    let credentials = props.credentials;
    
    //let credentials = JSON.parse(localStorage.getItem('credentials'));

    if(!credentials.user?.id) history.push('/login');

    let  UserAge = Math.floor(moment().diff(credentials.user.born, 'years',true));

    //Hooks

    const [user, setUser] = useState({
      
      name: "",
      lastname: "",
      address: "",
      nif: "",
      born: "",
      phone: "",
      
    });
  
    const [message, setMessage] = useState([]);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
  
    // Manejar el estado
  
    const updateUser = (key, value) => {
      setUser({ ...user, [key]: value });
      if (Object.keys(errors).length > 0) setErrors(validate({ ...user, [key]: value }, "register"));
    };
  
    // Envio de datos para la actualizacion 

    const Actualizar = async () => {
      const errs = validate(user, "register");
      setErrors(errs);
  
      if (Object.keys(errs).length > 0) return;
  
      let userData = {

        name: user.name,
        lastname: user.lastname,
        address: user.address,
        nif: user.nif,
        born: user.born,
        phone: user.phone,
      };

      console.log(userData)

      let userId = credentials.user.id;
  
      setLoading(true);
      setTimeout(() => {
          let token = credentials.token;
          console.log(token);
        axios
          .put(`http://localhost:3001/users/${userId}`,userData,{headers:{"authorization":"Bearer " + token}
        })
          .then(handleResponse)
          .catch((err) => {
            handleResponse({ data: { message: "Error de conexión." } });
          });
      }, 500);
    };
  
    const handleResponse = (response) => {
      if (response.status == 200) {
          console.log(response.data);
        localStorage.setItem("pendingmessage", "Registrado exitosamente. Ya puede iniciar sesión.");
        props.dispatch({type:UPDATE_USER, payload:response.data})
        history.push("/profile");
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
        <section className="profileContainer">
            <LeftMenu></LeftMenu>
            <div className="profile">
                <div className="bienvenida">Bienvenido/a, {credentials.user.name}.</div>
                <div className="cuerpo">
                    <div className="UserData">
                      <div className="uno">
                          <div className="avatar">
                              <Avatar name={credentials.user.name} styling='big' />
                          </div>
                          <div className="datosPersonalesUno">
                            
                             <div>{credentials.user.name}  {credentials.user.lastname}</div>
                             <div>{credentials.user.email}</div>
                             <div>Edad {UserAge}  años</div>

                
                          </div>
                      </div>
                      <div className="dos">
                          <div className="datosPersonalesDos">
                             <div>Información De Contacto</div> 
                             <div>{credentials.user.phone}</div> 
                             <div>{credentials.user.address}</div>
                               
                          </div>
                      </div>
                
                    </div>
                   <div className="Actualizar">
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
              
                <Form.Item validateStatus={errors.nif?.status} help={errors.nif?.help}>
                    <FormInput label="Documento de identidad" name="nif" onChange={updateUser} />
                </Form.Item>
            </div>
                      <button className="boton" onClick={()=>{Actualizar()}}>Actualizar</button>
                   </div>
                  
                   
                </div>
            </div>
        </section>
        <footer>
            
        </footer>
        </>
    )
}

export default connect((state)=>({credentials:state.credentials}))(ActualizarProfile);