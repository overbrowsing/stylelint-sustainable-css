const stylelint = require('stylelint');

const ruleName = 'sustainable-css/minimise-numeric-values';

function minimiseNumericValuesRule() {
  return (root, result) => {
    root.walkDecls(decl => {

      if (/^0\.\d/.test(decl.value)) {
        stylelint.utils.report({
          message: `Omit the 0 before decimal value, use "${decl.value}" instead of "0${decl.value}"`,
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }

      if (/^\d+(px|em|rem|%|in|cm|mm|pt|pc|vh|vw|vmin|vmax)$/.test(decl.value)) {
        stylelint.utils.report({
          message: `Remove unnecessary units from "${decl.prop}". Consider using the unitless value instead.`,
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }
    });
  };
}

module.exports = minimiseNumericValuesRule;
