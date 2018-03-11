import React from 'react';
import renderer from 'react-test-renderer';
import GetStarted from '../components/GetStarted';

describe('<GetStarted />', () => {
  const component = shallow(<GetStarted />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});