const stylelint = require('stylelint');

const ruleName = 'sustainable-css/shorter-class-names';

function shorterClassNamesRule() {
  return (root, result) => {
    root.walkRules(decl => {
      const selector = decl.selector;

      // Use Shorter Class/ID Names
      if (selector.includes(".") || selector.includes("#")) {
        const selectorParts = selector.split(/[\s>+,~]/);
        selectorParts.forEach(part => {
          if (part.startsWith(".") || part.startsWith("#")) {
            const name = part.substring(1);
            if (name.length > 15) {
              stylelint.utils.report({
                message: `Use shorter class or ID name for "${name}". Shorter names can improve readability and maintainability.`,
                node: decl,
                result,
                ruleName,
                severity: "warning",
              });
            }
          }
        });
      }
    });
  };
}

module.exports = shorterClassNamesRule;
