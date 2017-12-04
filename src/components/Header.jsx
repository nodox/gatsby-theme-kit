import React from 'react';

export function Header() {

  const toggleModal = (event, name) => {
    event.preventDefault();
    // if (condition) {
    //
    // }

    // console.log('name', name);
  }

  return (
    <header id="header">
      <div class="logo">
        <span class="icon fa-diamond"></span>
      </div>
      <div class="content">
        <div class="inner">
          <h1>Dimension</h1>
          <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
          for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><a onClick={ (event) => toggleModal(event, 'intro')}>Intro</a></li>
          <li><a onClick={ (event) => toggleModal(event, 'work')}>Work</a></li>
          <li><a onClick={ (event) => toggleModal(event, 'about')}>About</a></li>
          <li><a onClick={ (event) => toggleModal(event, 'contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
