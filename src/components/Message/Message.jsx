import React from 'react';
import {useState, useEffect} from 'react';
import './Message.css';


const Message = (props)=>{

    const [classes, setClasses] = useState('message');
    const [message, setMessage] = useState();
    
    useEffect(()=>{
        if (props.text != message) {
            setClasses('message');
            setMessage(props.text);
            setClasses('message visible');
            setTimeout(()=>{setClasses('message');},4000);
            setTimeout(()=>{
                setClasses('message hidden');
            },5000);
            return;
        }
    });


    return(
            <div className='messageContainer'>
                
                <div className={classes}>{message}</div>
            
            </div>
    )
}

export default Message;