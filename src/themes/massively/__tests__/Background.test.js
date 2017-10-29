import React from 'react';
import renderer from 'react-test-renderer';
import { Background } from '../components/Background';
import config from '../massivelyConfig';

describe('<Background />', () => {
  const component = mount(
    <Background />
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
