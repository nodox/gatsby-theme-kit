import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer';

describe('<Footer />', () => {
  const component = renderer.create(<Footer />).toJSON();

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});