const stylelint = require('stylelint');

const ruleName = 'sustainable-css/avoid-important-declarations';

function avoidImportantDeclarationsRule() {
  return (root, result) => {
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

module.exports = avoidImportantDeclarationsRule;
