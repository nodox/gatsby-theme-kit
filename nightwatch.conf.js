const BINPATH = './node_modules/nightwatch/bin/';
const SCREENSHOT_PATH = "./screenshots/";

module.exports = {
  "src_folders" : ["e2e"],
  "output_folder" : "reports",

  "selenium" : {
    "start_process" : true,
    "server_path" : BINPATH + "selenium.jar",

    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : BINPATH + "chromedriver",
      // "webdriver.gecko.driver" : "",
      // "webdriver.edge.driver" : ""
    }
  },

  "test_workers" : {
    "enabled": true,
    "workers": "auto"
  }, // perform tests in parallel where possible

  "test_settings" : {
    "default" : {
      "launch_url": "http://localhost",
      "screenshots": {
        "enabled": false, // if you want to keep screenshots
        "on_failure": false,
        "path": SCREENSHOT_PATH // save screenshots here
      },
      "globals": {
        "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "args": [
            "--headless",
          ],
          "binary": "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary"

        },
        "javascriptEnabled": true,
        // "acceptSslCerts": true
      }
    },

  }
}
/**
 * selenium-download does exactly what it's name suggests;
 * downloads (or updates) the version of Selenium (& chromedriver)
 * on your localhost where it will be used by Nightwatch.
 /the following code checks for the existence of `selenium.jar` before trying to run our tests.
 */

require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) { // got it?
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(BINPATH, function(error) {
      if (error) throw new Error(error); // no point continuing so exit!
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});

// function padLeft (count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
//   return count < 10 ? '0' + count : count.toString();
// }

// var FILECOUNT = 0; // "global" screenshot file count
/**
 * The default is to save screenshots to the root of your project even though
 * there is a screenshots path in the config object above! ... so we need a
 * function that returns the correct path for storing our screenshots.
 * While we're at it, we are adding some meta-data to the filename, specifically
 * the Platform/Browser where the test was run and the test (file) name.
 */
// function imgpath (browser) {
//   var a = browser.options.desiredCapabilities;
//   var meta = [a.platform];
//   meta.push(a.browserName ? a.browserName : 'any');
//   meta.push(a.version ? a.version : 'any');
//   meta.push(a.name); // this is the test filename so always exists.
//   var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
//   return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
// }
//
// module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;
