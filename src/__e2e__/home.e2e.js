const INTRO = {
  name: '#intro > .spotlight > .content > .major > h2',
  paragraph: '#intro > .spotlight > .content > p'
};

const FIRST_SECTION = {
  header: '#main > #first > header > h2',
  features: '#main > #first > ul > li > h3',
  footer: '#main > #first > footer',
  button: '#main > #first > footer > ul > li > .button',
};

const SECOND_SECTION = {
  header: '#main > #second > header > h2' ,
  statistics: '#main > #second > ul > li > span',
  content: '#main > #second > p',
  footer: '#main > #second > footer',
  button: '#main > #second > footer > ul > li > .button'
};

const GET_STARTED = {
  header: '#main > #cta > header > h2',
  footer: '#main > #cta > footer',
  button: '#main > #cta > footer > ul > li > .button'
};

module.exports = {
  'Homepage test': function(client) {
    client
      .resizeWindow(700, 800)
      .url('http://localhost:8000')
      .waitForElementVisible('body');

    client.expect.element('body').to.be.present.before(1000);
    client.expect.element('#main').to.be.visible;

    client.expect.element(INTRO.name).to.be.visible;
    client.expect.element(INTRO.paragraph).to.be.visible;

    client.expect.element(FIRST_SECTION.header).to.be.visible;
    client.expect.element(FIRST_SECTION.features).to.be.visible;
    client.expect.element(FIRST_SECTION.footer).to.be.visible;

    client.expect.element(SECOND_SECTION.header).to.be.visible;
    client.expect.element(SECOND_SECTION.statistics).to.be.visible;
    client.expect.element(SECOND_SECTION.content).to.be.visible;
    client.expect.element(SECOND_SECTION.footer).to.be.visible;

    client.expect.element(GET_STARTED.header).to.be.visible;
    client.expect.element(GET_STARTED.footer).to.be.visible;
    client.end();
  },
  'Generic page test': function(client) {
    client
      .resizeWindow(700, 800)
      .url('http://localhost:8000')
      .waitForElementVisible('body');
    client
      .click(FIRST_SECTION.button);

    client.expect.element('body').to.be.present.before(1000);
    client.expect.element('#main > #content > span > img').to.be.visible;
    client.expect.element('#main > #content > h2').to.be.visible;
    client.expect.element('#main > #content > p').to.be.visible;
    client.end();
  }
};