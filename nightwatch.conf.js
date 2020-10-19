const selenium = require('selenium-server')
const chromedriver = require('chromedriver')
const minimist = require('minimist')
const argv = minimist(process.argv)
const workersNum = argv.workers || 1

module.exports = {
  detailed_output: true,
  live_output: false,
  test_workers: {
    enabled: true,
    workers: workersNum
  },
  src_folders: ['spec'],
  output_folder: 'reports',
  custom_commands_path: 'commands/',
  custom_assertions_path: '',
  page_objects_path: [
    'pages/googlePage',
    'pages/ecosiaPage',
    'pages/nightwatchjsPage'
  ],
  globals_path: 'globals.js',
  selenium: {
    start_process: true,
    server_path: selenium.path,
    log_path: '',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path
    }
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        environment: 'pl',
        configurationFilesLocation: './configuration/pl/'
      },
      screenshots: {
        enabled: true,
        path: 'screenshots/',
        on_failure: true,
        on_error: true
      },
      desiredCapabilities: {
        browserName: 'chrome',
        marionette: true,
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['incognito', 'start-fullscreen']
        }
      }
    },

    headless: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        environment: 'pl',
        configurationFilesLocation: './configuration/pl/'
      },
      screenshots: {
        enabled: true,
        path: 'screenshots/',
        on_failure: true,
        on_error: true
      },
      desiredCapabilities: {
        browserName: 'chrome',
        marionette: true,
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['incognito', 'headless', 'no-sandbox', 'disable-gpu']
        }
      }
    }

  }
}
