import React from 'react';
import Main from '../components/Main';

describe('<Main />', () => {
  const component = shallow(<Main />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});