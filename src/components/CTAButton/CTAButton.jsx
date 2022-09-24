
import React from 'react';

import {useHistory} from 'react-router-dom';

const CTAButton = (props) => {

    let history = useHistory();

    const styling = 'CTAButton ' + (props.styling || 'CTA');

    const route = () => {
        if (props.goto == false) {
            return 
        } else 
        {
         history.push(`/${props.goto}`);

        }
    }

    let onClick = () => route();
    if (props.onClick) onClick = props.onClick;

    let returned = props.phone ? <a href="tel:+381606872411">
    <button onClick={onClick} className={styling} style={props.style}>
        {props.text}
    </button>
    </a> :         <button onClick={onClick} className={styling} style={props.style}>
    {props.text}
</button>

    return(
        returned
    )
}

export default CTAButton;