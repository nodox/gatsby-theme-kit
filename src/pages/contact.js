import React from 'react';
import Link from 'gatsby-link';

export default function Contact() {
  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>Contact</h1>
        </header>
        <div className="image main"><img src="images/pic01.jpg" alt=""/></div>
        <p>
          Email is the easiest way if you want to reach out 
          and I usually respond promptly. Use the contact form below.
        </p>
        <header className="major">
          <h1>What will get a response</h1>
        </header>
        <p>
          Queries about speaking at events or invitations to write a guest post, will get a 
          response even if I can't accept the invite. If you are interested in collaborating on 
          one of my open source projects or want career advice I will respond. If your message doesn't 
          explicitly look like it needs a response or it's vague or not clear what the purpose is, you 
          may not hear back from me. Recruiters or solicitors who send vague, unpersonalized, or mass emails are not welcome.
        </p>
      </section>
    </div>
  );
}

