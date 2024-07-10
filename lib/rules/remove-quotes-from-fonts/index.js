const stylelint = require('stylelint');

const ruleName = 'sustainable-css/remove-quotes-from-fonts';


function removeQuotesFromFontsRules() {
  return (root, result) => {
    root.walkDecls(decl => {
      if (decl.prop === "font-family" || decl.prop.startsWith("font")) {
        const fontFamilies = decl.value.split(',');
        fontFamilies.forEach(fontFamily => {
          const trimmedFont = fontFamily.trim();
          const isDoubleQuoted = trimmedFont.startsWith('"') && trimmedFont.endsWith('"');
          const isSingleQuoted = trimmedFont.startsWith("'") && trimmedFont.endsWith("'");
          if (isDoubleQuoted || isSingleQuoted) {
            stylelint.utils.report({
              message: messages.expected(trimmedFont),
              node: decl,
              result,
              ruleName,
              severity: "warning",
            });
          }
        });
      }
    });
  };
}

module.exports = removeQuotesFromFontsRules;
