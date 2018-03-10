import React from 'react';
import renderer from 'react-test-renderer';
import Generic from '../pages/generic';

describe('<Generic />', () => {
  const component = renderer.create(<Generic />).toJSON();

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});