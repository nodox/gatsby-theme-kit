import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('<Header />', () => {
  const component = renderer.create(<Header />).toJSON();

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});