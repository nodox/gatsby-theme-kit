import React from 'react';
import renderer from 'react-test-renderer';
import Tags from '../components/Tags';

describe('<Tags />', () => {
  const tags = [];

  const component = shallow(
    <Tags />
  );

  // const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have a the right props', () => {
  });

});
