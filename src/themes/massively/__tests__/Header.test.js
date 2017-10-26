import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('<Header />', () => {
  const component = shallow(
    <Header />
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

});
