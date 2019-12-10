import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../Pages/Login/Login';

describe('Testing Login Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Login />
    );

    expect(wrapper).toMatchSnapshot();
  })
})