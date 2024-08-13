const stylelint = require('stylelint');

const ruleName = 'sustainable-css/avoid-extra-spaces';

function avoidExtraSpacesRule() {
  return (root, result) => {
      root.walkRules(decl => {

        if (decl.nodes.length === 1 && decl.nodes[0].type === "decl") {
          const selector = decl.selector;
          if (selector.includes(" ") || selector.includes("\n")) {
            stylelint.utils.report({
              message: `Avoid unnecessary spaces and line breaks for selector "${selector}".`,
              node: decl,
              result,
              ruleName,
              severity: "warning",
            });
          }
        }
      }); 
  };
}

module.exports = avoidExtraSpacesRule;
