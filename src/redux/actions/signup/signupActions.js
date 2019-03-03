import axios from 'axios';
import * as type from '../actionTypes';

const fetchSignUp = (email, username, password) => (dispatch) => {
    const data = { email, username, password }
    axios.post('https://store-manag.herokuapp.com/api/v1/signup', data)
        .then((response) => {
            dispatch({
                type: type.REGISTER_SUCCESS,
                payload: response.data
            });
        })
        .catch((error) => {
            dispatch({
                type: type.REGISTER_FAILURE,
                payload: error
            });
        });
    
};

export default fetchSignUp;
