
module.exports = {
  'Guinea Pig Assert Title': function(client) {
    client
      .url('https://saucelabs.com/test/guinea-pig')
      .waitForElementVisible('body')
      .assert.title('I am a page title - Sauce Labs')
      .end();
  }
}
