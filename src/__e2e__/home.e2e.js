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
      .url('http://localhost:8000')
      .waitForElementVisible('body');

    client.expect.element('body').to.be.present.before(1000);
    client.expect.element('#main').to.be.visible;

    client.end();

  },

}
