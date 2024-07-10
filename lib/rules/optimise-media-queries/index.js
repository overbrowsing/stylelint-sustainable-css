const stylelint = require('stylelint');

const ruleName = 'sustainable-css/optimise-media-queries';


function optimiseMediaQueriesRule() {
  return (root, result) => {
    const mediaQueries = {};

    root.walkAtRules('media', atRule => {
      const params = atRule.params;
      if (!mediaQueries[params]) {
        mediaQueries[params] = [];
      }
      mediaQueries[params].push(atRule);
    });

    Object.keys(mediaQueries).forEach(params => {
      if (mediaQueries[params].length > 1) {
        const combinedAtRule = stylelint.utils.ruleMessages({
          name: 'media',
          params: params
        });

        mediaQueries[params].forEach(atRule => {
          atRule.each(node => {
            combinedAtRule.append(node.clone());
          });
          atRule.remove();
        });

        root.append(combinedAtRule);
        stylelint.utils.report({
          message: 'Combine similar media queries to avoid redundant declarations and minimize stylesheet size',
          node: combinedAtRule,
          result,
          ruleName,
          severity: 'warning'
        });
      }
    });
  };
}

module.exports = optimiseMediaQueriesRule;
