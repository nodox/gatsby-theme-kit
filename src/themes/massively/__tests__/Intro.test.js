import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../components/Intro';
import config from '../massivelyConfig';

describe('<Intro />', () => {
  const component = renderer.create(
    <Intro config={config} />
  );

  const props = component.getInstance().props;

  it('should render correctly', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('config');
    expect(props).toHaveProperty('config.introText');
    expect(props).toHaveProperty('config.name');
  });

});
