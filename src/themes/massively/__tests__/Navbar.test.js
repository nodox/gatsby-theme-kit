import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';
import * as config from '../massivelyConfig';

describe('<Navbar />', () => {
  const component = shallow(
    <Navbar links={config.initialLinks} currentPath='/home' />
  );

  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('links');
    expect(props).toHaveProperty('links.paths');
    expect(props).toHaveProperty('links.socialLinks');
    expect(props).toHaveProperty('currentPath');
  });

});
