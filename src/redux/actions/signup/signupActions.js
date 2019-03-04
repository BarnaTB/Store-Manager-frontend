import axios from 'axios';
import * as type from '../actionTypes';
import { toast } from 'react-toastify';

const fetchSignUp = (email, username, password) => (dispatch) => {
    const data = { email, username, password }
    const token = localStorage.getItem('token')
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+ token}
    axios.post('https://store-manag.herokuapp.com/api/v1/signup', data, {headers})
        .then((response) => {
            dispatch({
                type: type.REGISTER_SUCCESS,
                payload: response.data
            });
            toast.success(response.data.message)
        })
        .catch((error) => {
            dispatch({
                type: type.REGISTER_FAILURE,
                payload: error
            });
            toast.error(error.response.data.message)
        });
    
};

export default fetchSignUp;
