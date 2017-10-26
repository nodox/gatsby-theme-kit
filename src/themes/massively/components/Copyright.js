import React from 'react';


export default class Copyright extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="copyright">
        <ul>
          <li>{this.props.data.owner}</li>
          <li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
          <li>Powered by: <a href="https://www.gatsbyjs.org/">GatsbyJS</a></li>
        </ul>
      </div>
    );
  }
}
