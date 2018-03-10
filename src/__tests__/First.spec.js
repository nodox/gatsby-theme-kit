import React from 'react';
import renderer from 'react-test-renderer';
import First from '../components/First';

describe('<First />', () => {
  const component = renderer.create(<First />).toJSON();

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});