const stylelint = require('stylelint');

const ruleName = 'sustainable-css/avoid-overly-specific-selectors';

function avoidOverlySpecificSelectorsRule() {
  return (root, result) => {
    root.walkRules(rule => {

      const selector = rule.selector;
      const matches = selector.match(/(?:\.|#)[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+|\s+\.?[a-zA-Z0-9_-]+)*/g);
      if (matches && matches.length > 1) {
        stylelint.utils.report({
          message: `Avoid overly specific selector "${selector}"`,
          node: rule,
          result,
          ruleName,
          severity: 'warning',
        });
      }
    });
  };
}

module.exports = avoidOverlySpecificSelectorsRule;
