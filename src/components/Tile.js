import React from 'react';
import Img from "gatsby-image";

export class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalImage: this.props.modalImage,
      thumbnailImage: this.props.thumbnailImage,
    }
  }

  render() {

    return (
      <article className="thumb">
        <span className="image" style={{ backgroundImage: `url(${this.state.thumbnailImage})`}}></span>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </article>
    );
  }
}
