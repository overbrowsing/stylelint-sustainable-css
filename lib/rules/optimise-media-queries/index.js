const stylelint = require('stylelint');

const ruleName = 'sustainable-css/optimise-media-queries';

function optimiseMediaQueriesRule() {
  return (root, result) => {
    const mediaQueries = {};

    // Collect all media queries
    root.walkAtRules('media', atRule => {
      const params = atRule.params;

      if (!mediaQueries[params]) {
        mediaQueries[params] = [];
      }

      atRule.walkRules(rule => {
        mediaQueries[params].push(rule.selector);
      });
    });

    // Check for redundant media queries
    Object.keys(mediaQueries).forEach(params => {
      if (mediaQueries[params].length > 1) {
        stylelint.utils.report({
          message: "Combine similar media queries to optimize stylesheet size",
          node: root,
          result,
          ruleName,
          severity: 'warning',
        });
      }
    });
  };
}

module.exports = optimiseMediaQueriesRule;
