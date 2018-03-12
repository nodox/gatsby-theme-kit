import React from 'react';
import Index from '../pages/index';

describe('<Index />', () => {
  const component = shallow(<Index />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});