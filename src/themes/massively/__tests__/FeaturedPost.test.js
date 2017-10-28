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

  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('post.frontmatter');
    expect(props).toHaveProperty('post.frontmatter.date');
    expect(props).toHaveProperty('post.frontmatter.title');
    expect(props).toHaveProperty('post.frontmatter.tags');
    expect(props).toHaveProperty('post.frontmatter.path');
    expect(props).toHaveProperty('post.excerpt');
  });
});
