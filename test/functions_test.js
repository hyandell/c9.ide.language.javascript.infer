var testFw = require('./framework');

module.exports = testFw.buildTest('functions.js');

if (typeof module !== "undefined" && module === require.main) {
    require("asyncjs").test.testcase(module.exports).exec()
}