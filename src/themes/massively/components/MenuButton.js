import React from 'react';
import Link from 'gatsby-link';

export class MenuButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a href="#navPanel"
        id="navPanelToggle"
        className="alt"
        onClick={() => this.props.openPanel()}>Menu</a>
    );
  }
}
