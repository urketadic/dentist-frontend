import {combineReducers} from 'redux';
import credentials from './credentials-reducer.js';
import menu from './menu-reducer.js';
import message from './message-reducer.js';


const rootReducer = combineReducers({
    credentials,
    menu,
    message
});

export default rootReducer;