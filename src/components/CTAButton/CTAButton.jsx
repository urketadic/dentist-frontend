
import React from 'react';

import './CTAButton.css';

import {useHistory} from 'react-router-dom';

const CTAButton = (props) => {

    let history = useHistory();

    const styling = props.styling || 'CTA';

    const route = () => {
        history.push(`/${props.goto}`)
    }

    return(
        <div onClick={()=> route()} className={styling}>
            {props.text}
        </div>
    )
}

export default CTAButton;