import React from 'react';
import Header from '../components/Header';

describe('<Header />', () => {
  const component = shallow(<Header />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});