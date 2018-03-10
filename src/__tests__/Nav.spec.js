import React from 'react';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav';

describe('<Nav />', () => {
  const component = renderer.create(<Nav />).toJSON();

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});