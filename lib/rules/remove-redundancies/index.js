const stylelint = require('stylelint');

const ruleName = 'sustainable-css/remove-redundancies';

function removeRedundanciesRule() {
  return (root, result) => {

    // 1. Avoid unnecessary spaces and line breaks in selectors
    root.walkRules(rule => {
      if (rule.nodes.length === 1 && rule.nodes[0].type === "decl") {
        const selector = rule.selector;
        if (selector.includes(" ") || selector.includes("\n")) {
          stylelint.utils.report({
            message: `Avoid unnecessary spaces and line breaks for selector "${selector}".`,
            node: rule,
            result,
            ruleName,
            severity: "warning",
          });
        }
      }
    });


    // 3. Minimize @font-face src declarations to reduce HTTP requests
    root.walkAtRules('font-face', atRule => {
      let srcCount = 0;
      atRule.walkDecls('src', decl => {
        srcCount++;
        if (srcCount > 1) {
          stylelint.utils.report({
            message: `Reduce @font-face HTTP requests by using fewer src declarations.`,
            node: decl,
            result,
            ruleName,
            severity: "warning",
          });
        }
      });
    });

    // 4. Remove unnecessary quotes from font and font-family declarations
    root.walkDecls(decl => {
      if (decl.prop === "font-family" || decl.prop.startsWith("font")) {
        const fontFamilies = decl.value.split(',');
        fontFamilies.forEach(fontFamily => {
          const trimmedFont = fontFamily.trim();
          const isDoubleQuoted = trimmedFont.startsWith('"') && trimmedFont.endsWith('"');
          const isSingleQuoted = trimmedFont.startsWith("'") && trimmedFont.endsWith("'");
          if (isDoubleQuoted || isSingleQuoted) {
            stylelint.utils.report({
              message: "Omit quotes around font and font family names when they are not necessary.",
              node: decl,
              result,
              ruleName,
              severity: "warning",
            });
          }
        });
      }
    });

    // 5. Prefer HTML tags over CSS for text styles (italic and bold)
    root.walkDecls(decl => {
      if (decl.prop === 'font-style' && decl.value === 'italic') {
        stylelint.utils.report({
          message: `Use HTML tag <i> for italicized text instead of CSS.`,
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }

      if (decl.prop === 'font-weight') {
        const weight = decl.value.toLowerCase();
        if (weight === 'bold' || weight === 'bolder' || weight === '600') {
          stylelint.utils.report({
            message: `Use HTML tag <b> for bold text instead of CSS.`,
            node: decl,
            result,
            ruleName,
            severity: 'warning',
          });
        }
      }
    });
  };
}

module.exports = removeRedundanciesRule;
