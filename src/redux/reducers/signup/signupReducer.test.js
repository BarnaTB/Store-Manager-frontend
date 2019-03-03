import signupReducer from './signupReducer';
import { REGISTER_SUCCESS, REGISTER_FAILURE } from '../../actions/actionTypes';

const INITIAL_STATE = {
    success: false,
    payload: ''
};

describe('Test reset email reducer', () => {
    test('it returns false by default', () => {
        expect(signupReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    test('test for success', () => {
        expect(signupReducer(INITIAL_STATE, {type: REGISTER_SUCCESS})).toEqual({
            success: true
        });
    });

    test('test for failure', () => {
        expect(signupReducer(INITIAL_STATE, {type: REGISTER_FAILURE})).toEqual({
            success: false
        });
    });
});
