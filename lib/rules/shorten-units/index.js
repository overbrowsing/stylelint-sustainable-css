const stylelint = require('stylelint');

const ruleName = 'sustainable-css/shorten-units';

function shortenUnitsRule() {
  return (root, result) => {

    // 1. Ensure hexadecimal color values are used instead of rgb(), and short hex codes are preferred
    root.walkDecls(decl => {
      if (/rgb\(/.test(decl.value)) {
        stylelint.utils.report({
          message: `Expected hexadecimal color value instead of "${decl.value}".`,
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }

      if (decl.value.startsWith("#") && decl.value.length === 7) {
        const hexColorPattern = /^#([a-fA-F0-9]{6})$/;
        if (hexColorPattern.test(decl.value)) {
          const shortHex = `#${decl.value[1]}${decl.value[3]}${decl.value[5]}`;
          if (shortHex !== decl.value) {
            stylelint.utils.report({
              message: `Expected short hex color for "${decl.value}".`,
              node: decl,
              result,
              ruleName,
              severity: 'warning',
            });
          }
        }
      }
    });

    // 2. Avoid using high z-index values unnecessarily
    root.walkDecls(decl => {
      if (decl.prop === "z-index" && parseInt(decl.value) > 50) {
        stylelint.utils.report({
          message: `Avoid using high z-index values unnecessarily. Consider using a lower value for "${decl.prop}".`,
          node: decl,
          result,
          ruleName,
          severity: "warning",
        });
      }
    });

    // 3. Minimize numeric values and remove unnecessary units
    root.walkDecls(decl => {
      if (/^0\.\d/.test(decl.value)) {
        stylelint.utils.report({
          message: `Omit the 0 before decimal value, use "${decl.value}" instead of "0${decl.value}".`,
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }

      if (/^\d+(px|em|rem|%|in|cm|mm|pt|pc|vh|vw|vmin|vmax)$/.test(decl.value)) {
        stylelint.utils.report({
          message: `Remove unnecessary units from "${decl.prop}". Consider using the unitless value instead.`,
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }
    });

    // 4. Ensure numeric values are used for font-weight
    root.walkDecls(decl => {
      if (decl.prop === "font-weight" && isNaN(decl.value)) {
        stylelint.utils.report({
          message: `Expected numeric value for "font-weight" instead of "${decl.value}".`,
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }
    });

    // 5. Prefer 'em' units over 'rem' for sizing unless for global consistency
    root.walkDecls(decl => {
      if (/rem$/.test(decl.value)) {
        stylelint.utils.report({
          message: "Prefer 'em' units over 'rem' for sizing, unless for global consistency.",
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }
    });

    // 6. Prefer "transparent" instead of "rgba(0, 0, 0, 0)"
    root.walkDecls(decl => {
      if (decl.value === "rgba(0, 0, 0, 0)") {
        stylelint.utils.report({
          message: `Expected "transparent" instead of "${decl.value}".`,
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }
    });

    // 7. Suggest using 'em' units instead of 'px'
    root.walkDecls(decl => {
      if (decl.value.endsWith("px")) {
        const numericValue = parseFloat(decl.value);
        if (!isNaN(numericValue)) {
          const emValue = (numericValue / 16).toFixed(4);
          if (`${numericValue}px`.length > `${emValue}em`.length) {
            stylelint.utils.report({
              message: `Consider using 'em' units instead of 'px'. "${decl.value}px" can be written as "${emValue}em", saving ${decl.value.length - emValue.length + 1} character(s).`,
              node: decl,
              result,
              ruleName,
              severity: "warning",
            });
          }
        }
      }
    });

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

module.exports = shortenUnitsRule;
