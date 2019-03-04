import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../../actions/actionTypes';

const INITIAL_STATE = {
    success: false,
    payload: ''
}

const loginReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                payload: action.payload
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                success: false,
                payload: action.payload
            };
        default:
            return state
    };
};

export default loginReducer;
