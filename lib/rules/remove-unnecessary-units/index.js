const stylelint = require('stylelint');

const ruleName = 'sustainable-css/remove-unnecessary-units';

function removeUnnecessaryUnitsRule() {
  return (root, result) => {
    root.walkDecls(decl => {

      const unitlessValue = decl.value.replace(/[a-zA-Z%]+$/, '');
      if (decl.prop === "line-height") {
        checkLineHeightDeclaration(decl, result);
      } else if (decl.prop.startsWith("font")) {
        checkFontShorthand(decl, result);
      }
      if (unitlessValue !== decl.value) {
        stylelint.utils.report({
          message: `Remove unnecessary units from "line-height". Consider using the unitless value instead.`,
          node: decl,
          result,
          ruleName,
          severity: "warning",
        })
      }
      
      function checkFontShorthand(decl, result) {
        const fontProperties = decl.value.split(/\s+/);
        const lineHeightProperty = fontProperties.find(prop => prop.startsWith("/"));
        if (lineHeightProperty) {
          const lineHeightValue = lineHeightProperty.replace(/\//, '');
          const unitlessValue = lineHeightValue.replace(/[a-zA-Z%]+$/, '');
          if (unitlessValue !== lineHeightValue) {
            stylelint.utils.report({
              message: `Remove unnecessary units from "line-height inside of font shorthand". Consider using the unitless value instead.`,
              node: decl,
              result,
              ruleName,
              severity: "warning",
            });
          }
        }
      }
    });
  };
}

module.exports = removeUnnecessaryUnitsRule;
