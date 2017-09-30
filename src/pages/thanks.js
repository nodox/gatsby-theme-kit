import React from 'react';
import Link from 'gatsby-link';

export default function Thanks() {
  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>Thank you</h1>
        </header>
        <p>
          Your email has been sent. I will ensure I respond as soon as possible.
          Read my <Link to="/">blog posts</Link> in the mean time. Follow me on <a href="https://twitter.com/stevennatera">Twitter</a> for my latest updates.
        </p>
      </section>
    </div>
  );
}


