import React from 'react';
import renderer from 'react-test-renderer';
import Massively from '../index';
// https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f

describe('<Massively />', () => {
  const props = {
    location: {
      path: '/post'
    }
  }

  const component = shallow(
    <Massively props={props} />
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have more tests', () => {

  });

});
