import React from 'react';
import renderer from 'react-test-renderer';
import Second from '../components/Second';

describe('<Second />', () => {
  const component = renderer.create(<Second />).toJSON();

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});