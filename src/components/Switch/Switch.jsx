
import React from 'react';

import { Switch } from 'antd';

const FormSwitch = (props) => {
    
    let switchlabel = 'label';
    if (props.checked) switchlabel += ' checked';

    return(
        <div className="switch" onClick={props.onClick}>
            <div className={switchlabel}>{props.label}</div>
            <Switch checked={props.checked}></Switch>
        </div>
    )
}

export default FormSwitch;