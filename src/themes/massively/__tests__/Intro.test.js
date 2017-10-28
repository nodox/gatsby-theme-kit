import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../components/Intro';
import * as config from '../massivelyConfig';

describe('<Intro />', () => {
  const component = renderer.create(
    <Intro name={config.name} description={config.name} />
  );

  const props = component.getInstance().props;

  it('should render correctly', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('description');
    expect(props).toHaveProperty('name');
  });

});
