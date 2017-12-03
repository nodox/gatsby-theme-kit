
module.exports = {
  'Homepage test': function(client) {
    client
      .resizeWindow(700, 800)
      .url('http://localhost:8000')
      .waitForElementVisible('body');

    client.expect.element('body').to.be.present.before(1000);

    client.end();

  },

}
