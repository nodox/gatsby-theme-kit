import React from 'react';
import renderer from 'react-test-renderer';
import First from '../components/First';

describe('<First />', () => {
  const component = shallow(<First />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});