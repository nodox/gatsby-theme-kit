import React from 'react';
import renderer from 'react-test-renderer';
import Tags from '../components/Tags';

describe('<Tags />', () => {
  const component = shallow(
    <Tags />
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

});
