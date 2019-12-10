import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../Pages/Home/Home';

describe('Testing Home Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Home />
    );

    expect(wrapper).toMatchSnapshot();
  })
})