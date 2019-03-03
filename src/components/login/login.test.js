import React from 'react';
import { shallow, mount } from 'enzyme';

import { Login } from './login';
import { mapStateToProps } from './login'

describe('App', () => {

    const mockfetchResetPasswordfn = jest.fn()

    const props ={
        fetchLogin: mockfetchResetPasswordfn,
        message: 'Logged in!',
        password:{value:''}
    }

    it('should render without crashing', () => {
        const wrapper = shallow(<Login />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should call onUsernameChange', () => {
        const onUsernameChangeMock = jest.fn();
        const event = {
        target: { name: 'username', value: 'Barnabas' }
        };
        const component = shallow(<Login onChange={onUsernameChangeMock} />);
        component.instance().onUsernameChange(event)
        expect(component.instance().state).toEqual({ username: 'Barnabas'});
    });

    test('should call onPasswordChange', () => {
        const onPasswordChangeMock = jest.fn();
        const event = {
        target: { name: 'password', value: 'Barna1234' }
        };
        const component = shallow(<Login onChange={onPasswordChangeMock} />);
        component.instance().onPasswordChange(event)
        expect(component.instance().state).toEqual({ password: 'Barna1234'});
    });

    test('should render a form', () => {
        const component = shallow(<Login/>)
        expect(component.find('form').length).toEqual(1);
    });

    test("should map states to props", () => {
        const mockedState = {
            loginReducer: {success: false, payload: ''}
        }
        const state = mapStateToProps(mockedState);
        expect(state).toEqual({success: false, payload: ''});
    });

    test('it should submit', () =>{
        const component = shallow(<Login {...props} />)
        component.setState({
            success: false,
            payload: ''
        })
        component.instance().onSubmit({preventDefault() {} })
        expect(component.state()).toEqual({"payload": "", "success": false});
    });
});
