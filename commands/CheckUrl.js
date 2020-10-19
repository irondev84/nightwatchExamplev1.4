module.exports.command = function (url) {
  return this.url(function (results) {
    this.assert.strictEqual(results.value, url)
  })
}
