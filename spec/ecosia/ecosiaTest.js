const dictionary = require('./../../dictionary/dictionary_pl')

module.exports = {
    'My first test': function(browser){
        const ecosiaPage = browser.page.ecosiaPage()
        const nightwatchjsPage = browser.page.nightwatchjsPage()
            
            ecosiaPage.openEcosiaPage()
            ecosiaPage.setSearchText(dictionary.ecosiaSearchText)
            ecosiaPage.checkFirstResult(dictionary.nightwatchSearchResult)
            ecosiaPage.goToFirstResultSearch()
            nightwatchjsPage.checkUrl(dictionary.nightwatchURL)
            nightwatchjsPage.checkUrl_v2(dictionary.nightwatchURL)
            nightwatchjsPage.checkMainTitle()

        .end()
    }
}