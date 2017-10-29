import React from 'react';
import renderer from 'react-test-renderer';
import Copyright from '../components/Copyright';
import config from '../massivelyConfig';

describe('<Copyright />', () => {
  const component = mount(
    <Copyright config={config} />
  );

  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('config');
    expect(props).toHaveProperty('config.copyright');
    expect(props).toHaveProperty('config.copyright.owner');
  });

});
