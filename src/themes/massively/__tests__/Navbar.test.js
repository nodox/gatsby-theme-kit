import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

describe('<Navbar />', () => {
  const links = {
    paths: [
      {
        path: '/',
        title: 'Home',
      },
    ],
    socialLinks: [
      {
        path: 'https://www.twitter.com/stevennatera',
        icon: 'twitter',
        name: 'Twitter',
      },
    ]
  }

  const component = shallow(
    <Navbar links={links} currentPath='/home' />
  );

  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have a the right props', () => {
    expect(props).toHaveProperty('links');
    expect(props).toHaveProperty('currentPath');
  });

});
