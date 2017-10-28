import React from 'react';
import renderer from 'react-test-renderer';
import { NavPanel } from '../components/NavPanel';
import * as config from '../massivelyConfig';

describe('<NavPanel />', () => {
  const component = shallow(
    <NavPanel navLinks={config.initialLinks} />
  );

  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('navLinks');
    expect(props).toHaveProperty('navLinks.socialLinks');
    expect(props).toHaveProperty('navLinks.paths');
  });

});
