import React from 'react';
import { shallow } from 'enzyme';
import Album from '../../Pages/Album/Album';

describe('Testing Album Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Album />
    );

    expect(wrapper).toMatchSnapshot();
  })
})