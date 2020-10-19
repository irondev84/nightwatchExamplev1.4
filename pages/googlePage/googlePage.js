const googlePageSelectors = require('./googlePageSelectors')
const dictionary = require('../../dictionary/googleDictionary')

const commands = {
  openGooglePage: function () {
    return this.api.url('https://google.pl')
  },

  checkMainPage: function (googleSearchButton, googleLuckySearchButton) {
    return this
      .assert.value(googlePageSelectors.searchButton, googleSearchButton, 'Check search button text')
      .assert.value(googlePageSelectors.luckySearch, googleLuckySearchButton, 'Check lucky search button text')
  },

  typeSearchTextAndVerifyResults: function (searchingText) {
    return this
      .setValue(googlePageSelectors.searchInput, searchingText)
      .sendKeys(googlePageSelectors.searchInput, this.api.Keys.ENTER)
      .getText(googlePageSelectors.firstResult, function (result) {
        console.log(result.value)
        this.assert.strictEqual(result.value, dictionary.searchResult.nightwatchFirstResult) // only when using Selenium / JSONWire
      })
  }
}

module.exports = {
  commands: [commands],
  elements: googlePageSelectors
}
