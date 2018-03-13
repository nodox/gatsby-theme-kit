import React from 'react';
import Second from '../components/Second';

describe('<Second />', () => {
  const component = shallow(<Second />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});