const stylelint = require('stylelint');

const ruleName = 'sustainable-css/use-display-none';

function useDisplayNoneRule() {
  return (root, result) => {
    // Use display: none for Hiding Elements
    root.walkDecls(decl => {
      if (decl.prop === "visibility" && decl.value === "hidden") {
        stylelint.utils.report({
          message: `Use "display: none" instead of "visibility: hidden" to completely hide elements.`,
          node: decl,
          result,
          ruleName,
          severity: "warning",
        });
      }
    });   
  };
}

module.exports = useDisplayNoneRule;
