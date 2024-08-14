const stylelint = require('stylelint');

const ruleName = 'sustainable-css/no-semicolons';

function noSemiColonsRule() {
  return (root, result) => {
    root.walkRules(rule => {
      
      const lastNode = rule.nodes[rule.nodes.length - 1];
      if (lastNode && lastNode.type === 'decl' && lastNode.raws.semicolon) {
        stylelint.utils.report({
          message: "Avoid semicolon at the end of the last declaration in a ruleset.",
          node: lastNode,
          result,
          ruleName,
          severity: 'warning',
        });
      }
    });
  };
}
module.exports = noSemiColonsRule;
