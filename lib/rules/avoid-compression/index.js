const stylelint = require('stylelint');

const ruleName = 'sustainable-css/avoid-compression';

function avoidCompressionRule() {
  return (root, result) => {
    // Compression/Minifying
    root.walkRules(decl => {
      const selector = decl.selector;
      if (selector.includes("\n") || selector.includes("  ")) {
        stylelint.utils.report({
          message: `Avoid excessive compression or minification for selector "${selector}". Maintain clean and readable CSS.`,
          node: decl,
          result,
          ruleName,
          severity: "warning",
        });
      }
    });
  };
}

module.exports = avoidCompressionRule;
