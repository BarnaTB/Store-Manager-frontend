import { REGISTER_SUCCESS, REGISTER_FAILURE } from '../../actions/actionTypes';

const INITIAL_STATE = {
    success: false,
    payload: ''
}

const signupReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                success: true,
                payload: action.payload
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                success: false,
                payload: action.payload
            };
        default:
            return state
    };
};

export default signupReducer;
