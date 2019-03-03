import fetchSignUp from './signupActions'
import { REGISTER_SUCCESS, REGISTER_FAILURE } from "../actionTypes";
import "babel-polyfill";
import thunk from "redux-thunk";
import mockAxios from "axios";
import configureMockStore from "redux-mock-store";

jest.mock('axios');

describe('test signup actions', () => {
    test('it should dispatch a sucess action', async () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        const store = mockStore();
        const mockData = {username: 'Barna', email: 'barnabas.tumuhairwe@andela.com', password: 'Barna123'}
        const payload = {data: 'User registered successfully!'}

        mockAxios.post.mockImplementationOnce(() => Promise.resolve({data: payload}))

        const expectedActions = [{
            type: REGISTER_SUCCESS,
            payload: payload
        }]

        await store.dispatch(fetchSignUp(mockData));
        

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('it should dispatch a sucess action', async () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        const store = mockStore();
        const mockData = {username: '', email: 'barnabas.tumuhairwe@andela.com', password: ''}
        const error = {data: 'Failed to register user!'}

        mockAxios.post.mockImplementationOnce(() => Promise.reject({data: error}))

        const expectedActions = [{
            type: REGISTER_FAILURE,
            payload: error
        }]

        await store.dispatch(fetchSignUp(mockData));
        

        expect(store.getActions()).toEqual([]);
    });
});
