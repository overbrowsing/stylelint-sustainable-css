const stylelint = require('stylelint');

const ruleName = 'sustainable-css/lower-z-index-values';

function lowerZIndexValuesRule() {
  return (root, result) => {
    // Lower Unnecessary z-index
    root.walkDecls(decl => {
      if (decl.prop === "z-index" && parseInt(decl.value) > 50) {
        stylelint.utils.report({
          message: `Avoid using high z-index values unnecessarily. Consider using a lower value for "${decl.prop}".`,
          node: decl,
          result,
          ruleName,
          severity: "warning",
        });
      }
    });
  };
}

module.exports = lowerZIndexValuesRule;
