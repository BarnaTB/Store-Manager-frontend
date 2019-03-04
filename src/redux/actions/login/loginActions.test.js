import fetchLogin from './loginActions'
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actionTypes";
import "babel-polyfill";
import thunk from "redux-thunk";
import mockAxios from "axios";
import configureMockStore from "redux-mock-store";

jest.mock('axios');

describe('test signup actions', () => {
    test('it should dispatch a success action', async () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        const store = mockStore();
        const mockData = {username: 'Barna', password: 'Barna123'}
        const payload = {data: 'User logged in successfully!'}

        mockAxios.post.mockImplementationOnce(() => Promise.resolve({data: payload}))

        const expectedActions = [{
            type: LOGIN_SUCCESS,
            payload: payload
        }]

        await store.dispatch(fetchLogin(mockData));
        

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('it should dispatch a failure action', async () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        const store = mockStore();
        const mockData = {username: '', password: ''}
        const error = {data: 'Failed to log-in user!'}

        mockAxios.post.mockImplementationOnce(() => Promise.reject({data: error}))

        const expectedActions = [{
            type: LOGIN_FAILURE,
            payload: error
        }]

        await store.dispatch(fetchLogin(mockData));
        

        expect(store.getActions()).toEqual([]);
    });
});
