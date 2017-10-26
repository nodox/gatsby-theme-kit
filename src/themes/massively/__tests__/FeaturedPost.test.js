import React from 'react';
import renderer from 'react-test-renderer';
import FeaturedPost from '../components/FeaturedPost';

describe('<FeaturedPost />', () => {
  const post = {
    frontmatter: {
      date: 'YYYY-MM-DD',
      title: 'Hello, world!',
      tags: ['nodejs'],
      path: '/post',
    },
    excerpt: 'Hello, world my name is lorem ipsum.',
  }

  const component = shallow(
    <FeaturedPost post={post} />
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have more tests', () => {

  });

});
