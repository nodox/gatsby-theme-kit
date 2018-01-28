import React from 'react';

export default class Pagination extends React.Component {

  render() {

    return (
      <footer>
        <div className="pagination">
          <a href="#" className="previous">Prev</a>
          <a href="#" className="page active">1</a>
          <a href="#" className="page">2</a>
          <a href="#" className="page">3</a>
          <span className="extra">&hellip;</span>
          <a href="#" className="page">8</a>
          <a href="#" className="page">9</a>
          <a href="#" className="page">10</a>
          <a href="#" className="next">Next</a>
        </div>
      </footer>
    );
  }
}