import React from 'react';
import renderer from 'react-test-renderer';
import Second from '../components/Second';

describe('<Second />', () => {
  const component = shallow(<Second />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});