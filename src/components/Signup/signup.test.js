import React from 'react';
import { shallow } from 'enzyme';

import SignUp from './signup';

describe('App', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<SignUp />);

    expect(wrapper).toMatchSnapshot();
  });
});
