import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../components/Main';

describe('<Main />', () => {
  const component = renderer.create(<Main />).toJSON();

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});