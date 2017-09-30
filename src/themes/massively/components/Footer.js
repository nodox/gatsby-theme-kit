import React from 'react';

export default class Footer extends React.Component {

  render() {
    return (
      <footer id="footer">
        <section>
          <form method="post"
                name="contact"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                encType="application/x-www-form-urlencoded">
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
             <label>
               Don’t fill this out: <input name="bot-field" />
             </label>
            </p>
            <div className="field">
              <label>Name</label>
              <input type="text" name="name" id="name" placeholder="Your name"/>
            </div>
            <div className="field">
              <label>Email</label>
              <input id="email" type="email" name="email" placeholder="Your email"/>
            </div>
            <div className="field">
              <label>Message</label>
              <textarea id="message" name="message" rows="3" placeholder="Your message"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message"/></li>
            </ul>
          </form>
        </section>
        <section className="split contact">
          <section>
            <h3>Social</h3>
            <ul className="icons alt">
              <li><a href="https://www.twitter.com/stevennatera" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="https://www.linkedin.com/in/snatera" className="icon alt fa-linkedin"><span className="label">Facebook</span></a></li>
              <li><a href="https://www.github.com/nodox" className="alt icon fa-github"><span className="label">GitHub</span></a></li>
            </ul>
          </section>
        </section>
      </footer>
    );
  }
}







