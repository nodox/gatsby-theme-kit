import React from 'react';
import Link from 'gatsby-link';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name } = this.props.config;

    return (
      <header id="header">
        <Link to="/" className="logo">{name}</Link>
      </header>
    );
  }
}
