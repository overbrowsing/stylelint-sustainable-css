const { createPlugin } = require('stylelint');
const rules = require('./rules');

const rulesPlugins = Object.keys(rules).map(ruleName => {
  return createPlugin(`sustainable-css/${ruleName}`, rules[ruleName]);
});

module.exports = rulesPlugins;
