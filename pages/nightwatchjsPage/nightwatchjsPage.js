const nightwatchjsPageSelectors = require('./nightwatchjsPageSelectors')

const commands = {

  checkMainTitle: function () {
    return this
      .assert.containsText(nightwatchjsPageSelectors.nightwatchjsMainTitle, 'Nightwatch.js')
  },

  checkUrl: function (url) {
    return this
      .CheckUrl(url)
  },

  checkUrl_v2: function (url) {
    return this
      .assert.urlEquals(url)
  }
}

module.exports = {
  commands: [commands],
  elements: nightwatchjsPageSelectors
}
