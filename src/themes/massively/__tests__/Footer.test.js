import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer';
import * as config from '../massivelyConfig';

describe('<Footer />', () => {
  const component = mount(
    <Footer navLinks={config.initialLinks}/>
  );
  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('navLinks');
    expect(props).toHaveProperty('navLinks.socialLinks');
  });

});
