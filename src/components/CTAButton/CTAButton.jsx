
import React from 'react';

import {useHistory} from 'react-router-dom';

const CTAButton = (props) => {

    let history = useHistory();

    const styling = 'CTAButton ' + (props.styling || 'CTA');
    const disabled = 'CTAButton ' + 'disabled ' + (props.styling || 'CTA');

    const route = () => {
        if (props.goto == false) {
            return 
        } else 
        {
         history.push(`/${props.goto}`);

        }
    }
    // <a href="javascript:void(Tawk_API.toggle())"> Click to Chat </a>

    let returned = () => {
        if (props.phone) {
            return <a href="tel:+381656360334">
            <button onClick={onClick} className={styling} style={props.style}>
                {props.text}
            </button>
            </a>
        }
        if (props.chat) {
            return <a href="javascript:void(Tawk_API.toggle())"> 
            <button onClick={onClick} className={styling} style={props.style}>
                {props.text}
            </button>
            </a>
        }
        if (props.disabled) {
            return   <button disabled onClick={onClick} className={disabled} style={props.style}>
            {props.text}
        </button>
        }
        else {
            return <button onClick={onClick} className={styling} style={props.style}>
                {props.text}
            </button>
        }
    }

    let onClick = () => route();
    if (props.onClick) onClick = props.onClick;

//     let returned = props.phone ? <a href="tel:+381656360334"> 
//     <button onClick={onClick} className={styling} style={props.style}>
//         {props.text}
//     </button>
//     </a> :         <button onClick={onClick} className={styling} style={props.style}>
//     {props.text}
// </button>

    return(
        returned()
    )
}

export default CTAButton;