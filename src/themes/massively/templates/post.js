import React from 'react';
import Helmet from 'react-helmet';
import BackIcon from 'react-icons/lib/fa/chevron-left';
import ForwardIcon from 'react-icons/lib/fa/chevron-right';

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;

  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <span className="date">{post.frontmatter.date}</span>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.excerpt}</p>
        </header>
        <p
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Tags list={post.frontmatter.tags || []} />
        <div className="navigation">
          {prev &&
            <Link className="link prev" to={prev.frontmatter.path}>
              <BackIcon /> {prev.frontmatter.title}
            </Link>}
          {next &&
            <Link className="link next" to={next.frontmatter.path}>
              {next.frontmatter.title} <ForwardIcon />
            </Link>}
        </div>
      </section>
    </div>
  );
}