import React from 'react';
import renderer from 'react-test-renderer';
import { Massively } from '../Massively';
// https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f

describe('<Massively />', () => {
  const data = {
    location: {
      path: '/post'
    }
  }

  const component = shallow(
    <Massively data={data} />
  );

  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('data');

  });

});
