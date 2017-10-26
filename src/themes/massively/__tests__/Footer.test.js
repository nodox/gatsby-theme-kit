import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer';

describe('<Footer />', () => {
  const component = shallow(
    <Footer />
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

});
