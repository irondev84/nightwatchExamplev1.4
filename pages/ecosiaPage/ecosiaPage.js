const ecosiaPageSelectors = require('./ecosiaPageSelectors')

const commands = {
  openEcosiaPage: function () {
    return this.api.url('https://ecosia.org')
  },

  setSearchText: function (searchText) {
    return this
      .setValue(ecosiaPageSelectors.ecosiaSearchInput, searchText)
      .click(ecosiaPageSelectors.ecosiaSearchSubmitButton)
  },

  checkFirstResult: function (expectedResult) {
    return this
      .verify.containsText(ecosiaPageSelectors.firstSearchValueResult, expectedResult)
  },

  goToFirstResultSearch: function () {
    return this
      .click(ecosiaPageSelectors.firstSearchValueResult)
  }
}

module.exports = {
  commands: [commands],
  elements: ecosiaPageSelectors
}
