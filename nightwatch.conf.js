// Helpful
// https://gist.github.com/awatson1978/f94c1b7cab7a331d8d18

const jar = require('selenium-server-standalone-jar');

const BINPATH = './node_modules/nightwatch/bin/';
const SCREENSHOT_PATH = "./screenshots/";

const CHROME_BINARY_PATH = () => {
  const local_path = "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary";
  const travis_path = "google-chrome-stable";
  return process.env === 'travis' ? 'travis_path' : 'local_path';
}
// https://stackoverflow.com/questions/24550376/chrome-not-reachable-on-travis-ci
module.exports = {
  "src_folders" : ["src/themes/massively/__e2e__"],
  "output_folder" : "reports",
  // "test_runner" : {
  //   "type" : "mocha",
  //   "options" : {
  //     "ui" : "bdd",
  //     "reporter" : "list"
  //   }
  // },

  "selenium" : {
    "start_process" : true,
    "server_path": jar.path,
    "live_output": true,
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : BINPATH + "chromedriver",
      //"webdriver.gecko.driver" : BINPATH + "geckodriver"
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
            "--no-sandbox",
            "--no-default-browser-check",
            "--no-first-run",
            "--disable-default-apps"
          ],
          "binary": CHROME_BINARY_PATH
        },
        "javascriptEnabled": true,
        "acceptSslCerts": true
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
      if (error) console.log(error); // no point continuing so exit!
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});
