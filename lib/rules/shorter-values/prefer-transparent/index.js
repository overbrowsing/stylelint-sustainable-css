const stylelint = require('stylelint');

const ruleName = 'sustainable-css/prefer-transparent';

function transparentColorsRule() {
  return (root, result) => {
    root.walkDecls(decl => {

      if (decl.value === "rgba(0, 0, 0, 0)") {
        stylelint.utils.report({
          message: `Expected "transparent" instead of "${decl.value}"`,
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }
    });
  };
}

module.exports = transparentColorsRule;