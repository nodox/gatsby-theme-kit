import React from 'react';
import Link from 'gatsby-link';

export default function Tags({ list = [] }) {
  // you can use a small clas name as well for sizing
  return (
    <ul className="actions">
      {list.map(tag =>
        <li key={tag}>
          <Link to={`/tags/${tag}`} className="button special">
            {tag}
          </Link>
        </li>
      )}
    </ul>
  );
}