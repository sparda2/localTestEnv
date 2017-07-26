module.exports = {
  src_folders: ['./tests'],
  output_folder: './results',
  live_output: true,

  selenium: {
    start_process: true,
    server_path: '../selenium_server/selenium-server-standalone-3.4.0.jar',
    log_path: './results',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': '../drivers/chromedriver'
    }
  },

  test_settings: {
    default: {
      selenium_host: '127.0.0.1',
      selenium_port: 4444,
      silent: true,
      disable_colors: false,
      screenshots: {
        enabled: true,
        path: './results/screenshots'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      globals: require('./data/dev')
    },

    staging: {
      globals: require('./data/staging')
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true
      }
    },

    // phantom: {
    //   desiredCapabilities: {
    //     browserName: 'phantomjs',
    //     'phantomjs.binary.path': require('phantomjs').path,
    //     javascriptEnabled: true
    //   }
    //}
  }
};
