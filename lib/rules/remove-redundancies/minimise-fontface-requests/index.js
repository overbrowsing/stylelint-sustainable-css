const stylelint = require('stylelint');

const ruleName = 'sustainable-css/minimise-fontface-requests';

function minimiseFontfaceRequestsRule() {
  return (root, result) => {
    root.walkAtRules('font-face', atRule => {
      
      let srcCount = 0;
      atRule.walkDecls('src', decl => {
        srcCount++;
        if (srcCount > 1) {
          stylelint.utils.report({
            message: `Reduce @font-face HTTP requests by using fewer src declarations.`,
            node: decl,
            result,
            ruleName,
            severity: "warning",
          });
        }
      });
    });
  };
}


module.exports = minimiseFontfaceRequestsRule;
