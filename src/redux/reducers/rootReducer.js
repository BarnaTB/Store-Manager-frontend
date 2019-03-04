import { combineReducers } from 'redux';
import signupReducer from '../reducers/signup/signupReducer';
import loginReducer from '../reducers/login/loginReducer';

const rootReducer = combineReducers({
    signupReducer,
    loginReducer
})

export default rootReducer;
