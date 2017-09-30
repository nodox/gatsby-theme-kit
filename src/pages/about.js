import React from 'react';

export default function About() {
  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>About</h1>
        </header>
        <div className="image main"><img src="images/pic01.jpg" alt=""/></div>
        <p>
          I'm Steven Natera, a software engineer and entrepreneur. I spend a 
          my free time working on open source projects, exploring emerging 
          technologies (currently working with Rust and Webassembly), advising startups 
          on technical requirements or teaching an introductory web development course. 
          I'm happy to be emailed about technical queries, startup ideas, 
          press inquiries and certainly any corrections or suggestions for material 
          presented on my site.
        </p>
      </section>
    </div>
  );
}