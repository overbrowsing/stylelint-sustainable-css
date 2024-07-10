const stylelint = require('stylelint');

const ruleName = 'sustainable-css/use-inline-flexbox';

function useInlineFlexboxRule() {
  return (root, result) => {
    // Use inline-flex for Quick Alignments
    root.walkDecls(decl => {
      if (decl.prop === "display" && decl.value === "flex") {
        const parentRule = decl.parent;
        const hasAlignItems = parentRule.some(({ prop }) => prop === "align-items");
        const hasJustifyContent = parentRule.some(({ prop }) => prop === "justify-content");
        if (hasAlignItems && hasJustifyContent) {
          stylelint.utils.report({
            message: `Consider using "display: inline-flex" for quick alignments within a single container.`,
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

module.exports = useInlineFlexboxRule;
