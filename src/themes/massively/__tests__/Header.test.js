import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';
import * as config from '../massivelyConfig';

describe('<Header />', () => {
  const component = shallow(
    <Header name={config.name} />
  );

  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('name');
  });
});
