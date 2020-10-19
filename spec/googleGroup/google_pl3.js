const dictionary = require('../../dictionary/googleDictionary')
module.exports = {
  '@tags': ['google_pl'],
  'Check google search result': function (browser) {
    const googlePage = browser.page.googlePage()

    googlePage.openGooglePage()
    googlePage.checkMainPage(dictionary.search.googleSearchButton,
      dictionary.search.googleLuckySearchButton
    )
    googlePage.typeSearchTextAndVerifyResults('nightwatch js')
      .end()
  }
}
