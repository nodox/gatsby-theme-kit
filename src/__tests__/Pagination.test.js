import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '../components/Pagination';

describe('<Pagination />', () => {
  const component = renderer.create(
    <Pagination />
  );

  it('should render correctly', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
