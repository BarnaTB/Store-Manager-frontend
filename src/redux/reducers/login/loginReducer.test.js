import loginReducer from './loginReducer';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../../actions/actionTypes';

const INITIAL_STATE = {
    success: false,
    payload: ''
};

describe('Test reset email reducer', () => {
    test('it returns false by default', () => {
        expect(loginReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    test('test for success', () => {
        expect(loginReducer(INITIAL_STATE, {type: LOGIN_SUCCESS})).toEqual({
            success: true
        });
    });

    test('test for failure', () => {
        expect(loginReducer(INITIAL_STATE, {type: LOGIN_FAILURE})).toEqual({
            success: false
        });
    });
});
