import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';
import config from '../massivelyConfig';

describe('<Navbar />', () => {
  const component = shallow(
    <Navbar config={config} currentPath='/home' />
  );

  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('config');
    expect(props).toHaveProperty('config.initialLinks.paths');
    expect(props).toHaveProperty('config.initialLinks.socialLinks');
    expect(props).toHaveProperty('currentPath');
  });

});
