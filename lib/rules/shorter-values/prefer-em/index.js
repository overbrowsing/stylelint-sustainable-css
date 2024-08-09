const stylelint = require('stylelint');

const ruleName = 'sustainable-css/prefer-em';

function preferEmRule() {
  return (root, result) => {
    root.walkDecls(decl => {
      // Using em vs rem
      if (/em$/.test(decl.value)) {
        stylelint.utils.report({
          message: "Prefer 'em' units over 'rem' for sizing, unless for global consistency.",
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }      
    });
  };
}

module.exports = preferEmRule;
