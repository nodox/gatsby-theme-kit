import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer';
import config from '../massivelyConfig';

describe('<Footer />', () => {
  const component = mount(
    <Footer config={config} />
  );
  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('config');
    expect(props).toHaveProperty('config.initialLinks');
    expect(props).toHaveProperty('config.initialLinks.socialLinks');
  });

});
