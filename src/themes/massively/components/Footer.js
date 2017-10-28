import React from 'react';

export default class Footer extends React.Component {

  render() {

    const socialLinks = this.props.navLinks.socialLinks.map((obj, idx) => {
      return (
        <li key={idx}>
          <a href={obj.path} className={`icon ${obj.icon} alt`}><span className="label">{obj.name}</span></a>
        </li>
      );
    });

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
              {socialLinks}
            </ul>
          </section>
        </section>
      </footer>
    );
  }
}
