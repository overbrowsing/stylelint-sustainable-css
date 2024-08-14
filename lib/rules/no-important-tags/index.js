const stylelint = require('stylelint');

const ruleName = 'sustainable-css/no-important-tags';

function noImportantTagsRule() {
  return (root, result) => {      
    // Avoid using !important in declarations
    root.walkDecls(decl => {
      if (decl.important) {
        stylelint.utils.report({
          message: `Avoid using !important. Use a more specific selector or refactor your styles.`,
          node: decl,
          result,
          ruleName,
          severity: "warning",
        });
      }
    });
  };
}
module.exports = noImportantTagsRule;
