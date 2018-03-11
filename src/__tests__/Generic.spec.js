import React from 'react';
import renderer from 'react-test-renderer';
import Generic from '../pages/generic';

describe('<Generic />', () => {
  const component = shallow(<Generic />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});