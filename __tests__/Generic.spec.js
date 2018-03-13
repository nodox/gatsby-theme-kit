import React from 'react';
import Generic from '../pages/generic';

describe('<Generic />', () => {
  const component = shallow(<Generic />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});