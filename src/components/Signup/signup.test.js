import React from 'react';
import { shallow, mount } from 'enzyme';

import { SignUp } from './signup';
import { mapStateToProps } from './signup'

describe('App', () => {

    it('should render without crashing', () => {
        const wrapper = shallow(<SignUp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should call onEmailChange', () => {
        const onEmailChangeMock = jest.fn();
        const event = {
        target: { name: 'email', value: 'barnabastb2@gmail.com' }
        };
        const component = shallow(<SignUp onChange={onEmailChangeMock} />);
        component.instance().onEmailChange(event)
        expect(component.instance().state.email).toEqual('barnabastb2@gmail.com');
    });

    test('should call onUsernameChange', () => {
        const onUsernameChangeMock = jest.fn();
        const event = {
        target: { name: 'username', value: 'Barnabas' }
        };
        const component = shallow(<SignUp onChange={onUsernameChangeMock} />);
        component.instance().onUsernameChange(event)
        expect(component.instance().state).toEqual({ username: 'Barnabas'});
    });

    test('should call onPasswordChange', () => {
        const onPasswordChangeMock = jest.fn();
        const event = {
        target: { name: 'password', value: 'Barna1234' }
        };
        const component = shallow(<SignUp onChange={onPasswordChangeMock} />);
        component.instance().onPasswordChange(event)
        expect(component.instance().state).toEqual({ password: 'Barna1234'});
    });

    test('should render a form', () => {
        const component = shallow(<SignUp/>)
        expect(component.find('form').length).toEqual(1);
    });

    test("should map states to props", () => {
        const mockedState = {
            signupReducer: {success: false, payload: ''}
        }
        const state = mapStateToProps(mockedState);
        expect(state).toEqual({success: false, payload: ''});
    });
});
