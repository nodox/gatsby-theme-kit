import React from 'react';
import Link from 'gatsby-link';
import HomeIcon from 'react-icons/lib/fa/home';
import TagsIcon from 'react-icons/lib/fa/tags';

export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext;
  if (tag) {
    return (
      <div id="main">
        <h1>
          {post.length} post{post.length === 1 ? '' : 's'} tagged with {tag}
        </h1>
        <section className="post">
          <ul className="actions">
            {post.map(({ id, frontmatter, excerpt }) => {
              return (
                <li key={id}>
                  <h1>
                    <Link to={frontmatter.path} className="button special">
                      {frontmatter.title}
                    </Link>
                  </h1>
                  <p>
                    {excerpt}
                  </p>
                </li>
              );
            })}
          </ul>
          <Link to="/tags"  className="button special">
            <TagsIcon /> All tags
          </Link>
        </section>
      </div>
    );
  }
  return (
    <div id="main">
      <h1>Tags</h1>
      <section className="post">
        <ul className="actions">
          {Object.keys(posts).map(tagName => {
            const tags = posts[tagName];
            return (
              <li key={tagName}>
                <Link to={`/tags/${tagName}`} className="button special">
                  {tagName}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to="/"  className="button special">
          <HomeIcon /> All posts
        </Link>
      </section>
    </div>
  );
}
