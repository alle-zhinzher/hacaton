import { combineReducers } from 'redux';
//User reduser imports
import authReducer from './auth';

export default combineReducers({
    authReducer,
});