const INTRO_NAME = '#intro > h1';
const INTRO_PARAGRAPH = '#intro > p';
const NAVPANEL_OPEN_BUTTON = '#navPanelToggle';
const NAVPANEL_CLOSE_BUTTON = '#navPanelCloseBtn';
const NAVPANEL = '#navPanel';
const NAVPANEL_LINK = '#navPanel > nav > ul.links > li:nth-child(2) > a';
const POST = {
  title: '#main > section > article:nth-child(1) > header > h2 > a',
  excerpt: '#main > section > article:nth-child(1) > p',
  button: '#main > section > article:nth-child(1) > ul > li > a',
};
const PAGE_HEADER = '#main > section > header > h1';

module.exports = {
  'Homepage test': function(client) {
    client
      .resizeWindow(700, 800)
      .url('http://localhost:9000')
      .waitForElementVisible('body');

    client.expect.element('body').to.be.present.before(1000);
    client.expect.element(INTRO_NAME).to.be.visible;
    client.expect.element(INTRO_PARAGRAPH).to.be.visible;


    client.expect.element(POST.title).to.be.visible;
    client.expect.element(POST.excerpt).to.be.visible;
    client.expect.element(POST.button).to.be.visible;


  },
  'Post Test': function(client) {
    client
      .click(POST.button);

    client.expect.element('#main > section > header').to.be.visible;
    client.expect.element('#main > section > p').to.be.visible;

    // tags list
    client.expect.element('#main > section > ul').to.be.visible;

    // next button
    client.expect.element('#main > section > div').to.be.visible;

    // don't like this test bc its repetative
    client
      .click('#main > section > div');

    client.expect.element('#main > section > header').to.be.visible;
    client.expect.element('#main > section > p').to.be.visible;
    client.expect.element('#main > section > ul').to.be.visible;
  },
  'NavPanel Test': function(client) {
    client.expect.element(NAVPANEL_OPEN_BUTTON).to.be.visible;
    client.expect.element(NAVPANEL).to.not.be.visible;

    client
      .click(NAVPANEL_OPEN_BUTTON);

    client.expect.element(NAVPANEL_CLOSE_BUTTON).to.be.visible;
    client.expect.element(NAVPANEL).to.be.visible;

    client
      .click(NAVPANEL_LINK);

    client.expect.element(NAVPANEL).to.not.be.visible;
    client.expect.element(NAVPANEL_CLOSE_BUTTON).to.not.be.visible;
    client.expect.element(PAGE_HEADER).text.to.contain('ABOUT');

    client
      .click(NAVPANEL_OPEN_BUTTON);

    client.expect.element(NAVPANEL_CLOSE_BUTTON).to.be.visible;
    client.expect.element(NAVPANEL).to.be.visible;

    client
      .click(NAVPANEL_CLOSE_BUTTON)
    client.expect.element(NAVPANEL).to.not.be.visible;

  },
//   'Page Test': function(client) {
//   },
//   'Tags Page Test': function(client) {
//   },
//   'Navbar Test': function(client) {
//   },
  'Footer Form Test': function(client) {
    client
      .setValue('#name', 'Mr. Foobar')
      .setValue('#email', 'foobar@gmail.com')
      .setValue('#message', 'Hello World')
      .waitForElementVisible('#footer > section:nth-child(1) > form > ul > li > input[type="submit"]', 1000);
      //.click('#footer > section:nth-child(1) > form > ul > li > input[type="submit"]');

    client.url('http://localhost:9000/thanks/')

    client.assert.urlContains('/thanks/');
    client.expect.element(PAGE_HEADER).to.be.visible;
    client.expect.element(PAGE_HEADER).text.to.contain('THANK YOU');

    client.end();
  },



}
