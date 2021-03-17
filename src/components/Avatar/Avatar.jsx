
import React from 'react';

import {useHistory} from 'react-router-dom';

const Avatar = (props) => {

    let history = useHistory();

    const styling = 'Avatar ' + (props.styling || 'small');

    const route = () => {
        history.push(`/${props.goto}`);
    }

    let onClick = () => route();
    if (props.onClick) onClick = props.onClick;

    let letter = 'Ñ';
    let name = '';
    if (props.name) {
        letter = props.name.slice(0,1).toUpperCase();
        if (!props.styling || props.styling == 'small') name = props.name;
    }
    let style;
    if (props.color) {
        style = {backgroundColor: props.color};
    }

    return(
        <div onClick={onClick} className={styling}>
            <div className="avatarPic" style={style}>
                <div className="letter">{letter}</div>
            </div>
            <div className="name">{name}</div>
        </div>
    )
}

export default Avatar;