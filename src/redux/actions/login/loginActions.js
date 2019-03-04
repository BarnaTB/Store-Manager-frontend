import axios from 'axios';
import * as type from '../actionTypes';
import { toast } from 'react-toastify'

const fetchLogin = (username, password) => (dispatch) => {
    const data = { username, password }
    axios.post('https://store-manag.herokuapp.com/api/v1/login', data)
        .then((response) => {
            dispatch({
                type: type.LOGIN_SUCCESS,
                payload: response.data
            });
            toast.success(response.data.message)
            localStorage.setItem('token', response.data.token)
        })
        .catch((error) => {
            dispatch({
                type: type.LOGIN_FAILURE,
                payload: error
            });
            toast.error(error.response.data.message)
        });
    
};

export default fetchLogin;
