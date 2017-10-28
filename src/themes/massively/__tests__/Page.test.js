import React from 'react';
import renderer from 'react-test-renderer';
import Page from '../components/Page';

describe('<Page />', () => {
  const data = {
    desc: 'Hello world we need a description',
    title: 'Lorem ipsum',
  }

  const component = renderer.create(
    <Page desc={data.desc} title={data.title} />
  );

  const props = component.getInstance().props;

  it('should render correctly', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('desc');
    expect(props).toHaveProperty('title');
  });

});
