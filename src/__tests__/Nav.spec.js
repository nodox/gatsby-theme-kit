import React from 'react';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav';

describe('<Nav />', () => {
  const component = shallow(<Nav />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});