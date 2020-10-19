module.exports = {
  'My first test': function (browser) {
    const ecosiaPage = browser.page.ecosiaPage()
    ecosiaPage.openEcosiaPage()
    ecosiaPage.setSearchText('nightwatchjs')
    ecosiaPage.checkFirstResult('Nightwatch.js | Node.js powered End-to-End testing framework')
      .end()
  }
}
