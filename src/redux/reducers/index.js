import {combineReducers} from 'redux';
import credentials from './credentials-reducer.js';
import menu from './menu-reducer.js';


const rootReducer = combineReducers({
    credentials,
    menu
});

export default rootReducer;