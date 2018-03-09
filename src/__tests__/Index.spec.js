import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../pages/index';

describe('<Index />', () => {
  const component = renderer.create(<Index />).toJSON();

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});