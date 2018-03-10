import React from 'react';
import renderer from 'react-test-renderer';
import GetStarted from '../components/GetStarted';

describe('<GetStarted />', () => {
  const component = renderer.create(<GetStarted />).toJSON();

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});