import React from 'react';
import renderer from 'react-test-renderer';
import { Starter } from '../components/Starter';

describe('<Starter />', () => {
  const component = mount(
    <Starter />
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

});
