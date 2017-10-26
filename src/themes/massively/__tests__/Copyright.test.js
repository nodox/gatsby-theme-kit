import React from 'react';
import renderer from 'react-test-renderer';
import Copyright from '../components/Copyright';

describe('<Copyright />', () => {
  const data = {
    owner: 'Steven Natera'
  }

  const component = renderer.create(
    <Copyright data={data} />
  );

  const props = component.getInstance().props;

  it('should render correctly', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('data');
  });

  it('should have a prop attribute of owner', () => {
    expect(props).toHaveProperty('data.owner');
  });
});
