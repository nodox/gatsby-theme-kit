import React from 'react';
import renderer from 'react-test-renderer';
import Copyright from '../components/Copyright';
import * as config from '../massivelyConfig';

describe('<Copyright />', () => {
  const component = mount(
    <Copyright data={config.copyright} />
  );

  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('data');
    expect(props).toHaveProperty('data.owner');
  });

});
