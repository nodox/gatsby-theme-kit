import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../components/Intro';

describe('<Intro />', () => {
  const component = renderer.create(<Intro />).toJSON();

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});