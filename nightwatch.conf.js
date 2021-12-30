// Autogenerated by Nightwatch
// Refer to the online docs for more details: https://nightwatchjs.org/gettingstarted/configuration/
const Services = {}; loadServices();

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ["tests"],

  // See https://nightwatchjs.org/guide/working-with-page-objects/
  page_objects_path: ['page-objects'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-commands
  custom_commands_path:  '',

  // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-assertions
  custom_assertions_path: '',

  // See https://nightwatchjs.org/guide/#external-globals
  globals_path : '',

  webdriver: {},

  test_settings: {
    default: {
      disable_error_log: true,
      launch_url: 'https://nightwatchjs.org',

      screenshots: {
        enabled: true,
        path: 'tests_output/screenshots',
        on_failure: true,
        on_error: true
      },

      // desiredCapabilities: {
      //   browserName : 'firefox'
      // },

      // webdriver: {
      //   start_process: true,
      //   server_path: (Services.geckodriver ? Services.geckodriver.path : '')
      // }
    },

    // safari: {
    //   desiredCapabilities : {
    //     browserName : 'safari',
    //     alwaysMatch: {
    //       acceptInsecureCerts: false
    //     }
    //   },
    //   webdriver: {
    //     port: 4445,
    //     start_process: true,
    //     server_path: '/usr/bin/safaridriver'
    //   }
    // },

    firefox: {
      desiredCapabilities : {
        browserName : 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              // '-verbose'
            ]
          }
        }

      },
      webdriver: {
        start_process: true,
        port: 4444,
        server_path: (Services.geckodriver ? Services.geckodriver.path : ''),
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    },

    firefox_headless: {
      desiredCapabilities : {
        browserName : 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              '-headless',
              // '-verbose'
            ]
          }
        }

      },
      webdriver: {
        start_process: true,
        port: 4445,
        server_path: (Services.geckodriver ? Services.geckodriver.path : ''),
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    },

    chrome: {
      desiredCapabilities : {
        browserName : 'chrome',
        'goog:chromeOptions' : {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // This tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: false,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        port: 9515,
        server_path: (Services.chromedriver ? Services.chromedriver.path : ''),
        cli_args: [
          // --verbose
        ]
      }
    },

    chrome_headless: {
      desiredCapabilities : {
        browserName : 'chrome',
        'goog:chromeOptions' : {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // This tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: false,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            '--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        port: 9516,
        server_path: (Services.chromedriver ? Services.chromedriver.path : ''),
        cli_args: [
          // --verbose
        ]
      }
    },

    // edge: {
    //   desiredCapabilities : {
    //     browserName : 'MicrosoftEdge',
    //     'ms:edgeOptions' : {
    //       w3c: false,
    //       // More info on EdgeDriver: https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options
    //       args: [
    //         //'--headless'
    //       ]
    //     }
    //   },

    //   webdriver: {
    //     start_process: true,
    //     // Download msedgedriver from https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/
    //     //  and set the location below:
    //     server_path: '',
    //     cli_args: [
    //       // --verbose
    //     ]
    //   }
    // },

    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the browserstack.com cloud service               |
    //                                                                               |
    // Please set the username and access key by setting the environment variables:  |
    // - BROWSERSTACK_USER                                                           |
    // - BROWSERSTACK_KEY                                                            |
    // .env files are supported                                                      |
    //////////////////////////////////////////////////////////////////////////////////
    browserstack: {
      selenium: {
        host: 'hub-cloud.browserstack.com',
        port: 443
      },
      // More info on configuring capabilities can be found on:
      // https://www.browserstack.com/automate/capabilities?tag=selenium-4
      desiredCapabilities: {
        'bstack:options' : {
          userName: '${BROWSERSTACK_USER}',
          accessKey: '${BROWSERSTACK_KEY}',
        }
      },

      disable_error_log: true,
      webdriver: {
        timeout_options: {
          timeout: 15000,
          retry_attempts: 3
        },
        keep_alive: true,
        start_process: false
      }
    },

    'browserstack.local': {
      extends: 'browserstack',
      desiredCapabilities: {
        'browserstack.local': true
      }
    },

    'browserstack.chrome': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions : {
          w3c: false
        }
      }
    },

    'browserstack.firefox': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'firefox'
      }
    },

    'browserstack.ie': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'internet explorer',
        browserVersion: '11.0'
      }
    },

    'browserstack.safari': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'safari'
      }
    },

    'browserstack.local_chrome': {
      extends: 'browserstack.local',
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },

    'browserstack.local_firefox': {
      extends: 'browserstack.local',
      desiredCapabilities: {
        browserName: 'firefox'
      }
    },
    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the Selenium service, either locally or remote,  |
    //  like Selenium Grid                                                           |
    //////////////////////////////////////////////////////////////////////////////////
    selenium_server: {
      // Selenium Server is running locally and is managed by Nightwatch
      selenium: {
        start_process: true,
        port: 4444,
        server_path: (Services.seleniumServer ? Services.seleniumServer.path : ''),
        cli_args: {
          'webdriver.gecko.driver': (Services.geckodriver ? Services.geckodriver.path : ''),
          'webdriver.chrome.driver': (Services.chromedriver ? Services.chromedriver.path : '')
        }
      }
    },

    'selenium.chrome': {
      extends: 'selenium_server',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions : {
          w3c: false
        }
      }
    },

    'selenium.firefox': {
      extends: 'selenium_server',
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: [
            // '-headless',
            // '-verbose'
          ]
        }
      }
    }
  }
};

function loadServices() {
  try {
    Services.seleniumServer = require('selenium-server');
  } catch (err) {}

  try {
    Services.chromedriver = require('chromedriver');
  } catch (err) {}

  try {
    Services.geckodriver = require('geckodriver');
  } catch (err) {}
}

// module.exports = {
//   "src_folders" : ["tests"],
//   "page_objects_path" : ['page-objects'],

//   "webdriver" : {
//     "start_process": true,
//     "server_path": "node_modules/.bin/chromedriver",
//     "port": 9514
//   },

//   "test_settings" : {
//     "default" : {
//       "screenshots":{
//         'enabled': true,
//         'on_failure': true,
//         'on_error': true,
//         'path': 'tests_output/screenshots'
//       },
//       "desiredCapabilities": {
//         "browserName": "chrome",
//         "chromeOptions":{
//             'args': ['--headless']
//       }
//     }
//   },
//     "firefox" : {
//       "desiredCapabilities": {
//         "browserName": "firefox"
//       }
//     }
// }
// };