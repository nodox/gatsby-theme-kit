import React from 'react';

export default function Nav(props) {
  return (
    <nav id="nav">
      <ul>
        <li><a href="#intro" className="active">Introduction</a></li>
        <li><a href="#first">First Section</a></li>
        <li><a href="#second">Second Section</a></li>
        <li><a href="#cta">Get Started</a></li>
      </ul>
    </nav>
  )
}