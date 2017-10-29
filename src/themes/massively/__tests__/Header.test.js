import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';
import config from '../massivelyConfig';

describe('<Header />', () => {
  const component = shallow(
    <Header config={config} />
  );

  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('config');
    expect(props).toHaveProperty('config.name');
  });
});
