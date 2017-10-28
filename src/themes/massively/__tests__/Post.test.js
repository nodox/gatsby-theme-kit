import React from 'react';
import renderer from 'react-test-renderer';
import Post from '../components/Post';

describe('<Post />', () => {
  const post = {
    frontmatter: {
      date: 'YYYY-MM-DD',
      title: 'Hello, world!',
      tags: ['nodejs'],
      path: '/post',
    },
    excerpt: 'Hello, world my name is lorem ipsum.',
    next: {
      frontmatter: {
        date: 'YYYY-MM-DD',
        title: 'Hello, world!',
        tags: ['nodejs'],
        path: '/post',
      },
      excerpt: 'Hello, world my name is lorem ipsum.',
    },
    prev: {
      frontmatter: {
        date: 'YYYY-MM-DD',
        title: 'Hello, world!',
        tags: ['nodejs'],
        path: '/post',
      },
      excerpt: 'Hello, world my name is lorem ipsum.',
    }
  }


  const component = shallow(
    <Post post={post} />
  );

  const props = component.instance().props;

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should have the right props', () => {
    expect(props).toHaveProperty('post');
    expect(props).toHaveProperty('post.excerpt');

    expect(props).toHaveProperty('post.frontmatter.date');
    expect(props).toHaveProperty('post.frontmatter.title');
    expect(props).toHaveProperty('post.frontmatter.tags');
    expect(props).toHaveProperty('post.frontmatter.path');

    expect(props).toHaveProperty('post.prev');
    expect(props).toHaveProperty('post.next');
  });

});
