import React from 'react';
import Link from 'gatsby-link';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header id="header">
        <Link to="/" className="logo">Steven Natera</Link>
      </header>
    );
  }
}




