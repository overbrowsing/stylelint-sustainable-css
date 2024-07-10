const stylelint = require('stylelint');

const ruleName = 'sustainable-css/minimise-float-use';


function minimiseFloatUseRule() {
  return (root, result) => {
    root.walkRules(decl => {
      // Minimize Use of Float
      root.walkDecls(decl => {
        if (decl.prop === "float" && (decl.value === "left" || decl.value === "right")) {
          stylelint.utils.report({
            message: `Avoid using "${decl.prop}: ${decl.value}". Use "display: flex" or "display: grid" instead.`,
            node: decl,
            result,
            ruleName,
            severity: "warning",
          });
        }
      });
    });
  };
}

module.exports = minimiseFloatUseRule;
