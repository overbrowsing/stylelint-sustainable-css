const stylelint = require('stylelint');

const ruleName = 'sustainable-css/avoid-inherit-initial';

function avoidInheritInitialRule() {
  return (root, result) => {
    // Use inherit and initial Wisely
    root.walkDecls(decl => {
      if (decl.value === "inherit" || decl.value === "initial") {
        stylelint.utils.report({
          message: `Consider simplifying your style rules by avoiding direct use of "${decl.value}".`,
          node: decl,
          result,
          ruleName,
          severity: "warning",
        });
      }
    });  
  };
}

module.exports = avoidInheritInitialRule;
