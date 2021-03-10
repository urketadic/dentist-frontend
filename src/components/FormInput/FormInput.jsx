
import React from 'react';
import { useState } from 'react';

import { Input } from 'antd';
import 'antd/lib/input/style/index.css';
import './FormInput.css';

const FormInput = (props) => {

    let CInput = Input;
    if (props.type) {
        CInput = Input[props.type];
    }
    
    const [isActive, setIsActive] = useState(false);

    const handleTextChange = (text) => {
      
        if (text !== '') {
          setIsActive(true);
        } else {
          setIsActive(false);
        }

    }
    
    return(
        <div className="formInput">
            <CInput name={props.name} onChange={(e) => handleTextChange(e.target.value)}/>
            <label htmlFor={props.name} className={ isActive ? "Active" : ""}>
                {props.label}
            </label>
        </div>
    )

}

export default FormInput;