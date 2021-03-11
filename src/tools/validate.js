export default function validate(fields) {
    let errors = {};
    for (let key in fields) {
        switch (key) {
            case 'email':
                if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(fields[key]) )
                errors[key] = {status: 'error', help: 'Por favor escriba un email válido.'};
            break;
            case 'password':
                if(fields[key] == '')
                errors[key] = {status: 'error', help: 'Por favor escriba su contraseña.'};
            break;
        }
    }
    return errors;
}