const HtmlReporter = require('nightwatch-html-reporter')

var reporter = new HtmlReporter({
  openBrowser: false,
  reportsDirectory: 'reports',
  separateReportPerSuite: true
})

module.exports = {
  before: function (done) {
    console.log('Setting up...')
    done()
  },

  after: function (done) {
    console.log('Closing down...')
    done()
  },

  beforeEach: function (done) {
    console.log('Setting up... beforeEach')
    done()
  },

  afterEach: function (done) {
    console.log('Closing down... afterEach')
    done()
  },

  getConfig: function (defConfFilePath) {
    return require(this.configurationFilesLocation + defConfFilePath)
  },

  url () {
    if (this.environment === 'pl') {
      return 'https://news.google.com/?hl=pl&gl=PL&ceid=PL:pl'
    }
  },
  reporter: reporter.fn
}
