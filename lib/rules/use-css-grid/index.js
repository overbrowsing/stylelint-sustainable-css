const stylelint = require('stylelint');

const ruleName = 'sustainable-css/use-css-grid';

function useCssGridRule() {
  return (root, result) => {
    // Use CSS Grid for Complex Layouts
    root.walkDecls(decl => {
      if (decl.prop === "display" && decl.value === "flex") {
        const parentRule = decl.parent;
        const hasFlexDirection = parentRule.some(({ prop }) => prop === "flex-direction");
        const hasFlexWrap = parentRule.some(({ prop }) => prop === "flex-wrap");
        if (hasFlexDirection && hasFlexWrap) {
          stylelint.utils.report({
            message: `Consider using CSS Grid for complex layout structures to simplify code.`,
            node: parentRule,
            result,
            ruleName,
            severity: "warning",
          });
        }
      }
    });  
  };
}

module.exports = useCssGridRule;
