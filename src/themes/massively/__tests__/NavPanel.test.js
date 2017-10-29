import React from 'react';
import renderer from 'react-test-renderer';
import { NavPanel } from '../components/NavPanel';
import config from '../massivelyConfig';

describe('<NavPanel />', () => {
  const component = shallow(
    <NavPanel config={config} />
  );

  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('config');
    expect(props).toHaveProperty('config.initialLinks.paths');
    expect(props).toHaveProperty('config.initialLinks.socialLinks');
  });

});
