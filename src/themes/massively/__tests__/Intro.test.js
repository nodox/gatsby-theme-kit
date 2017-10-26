import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../components/Intro';

describe('<Intro />', () => {
  const data = 'Steven Natera';

  const component = renderer.create(
    <Intro description={data} />
  );

  const props = component.getInstance().props;

  it('should render correctly', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have a the right props', () => {
    expect(props).toHaveProperty('description');
  });

});
