const stylelint = require('stylelint');

const ruleName = 'sustainable-css/numerical-font-weight';

function numericalFontWeightRule() {
  return (root, result) => {
    root.walkDecls(decl => {

      if (decl.prop === "font-weight" && isNaN(decl.value)) {
        stylelint.utils.report({
          message: `Expected numeric value for "font-weight" instead of "${decl.value}"`,
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }
    });
  };
}

module.exports = numericalFontWeightRule;
