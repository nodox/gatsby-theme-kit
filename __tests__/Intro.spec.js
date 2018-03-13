import React from 'react';
import Intro from '../components/Intro';

describe('<Intro />', () => {
  const component = shallow(<Intro />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});