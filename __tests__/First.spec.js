import React from 'react';
import First from '../components/First';

describe('<First />', () => {
  const component = shallow(<First />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});