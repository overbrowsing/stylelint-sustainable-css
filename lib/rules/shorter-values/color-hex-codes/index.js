const stylelint = require('stylelint');

const ruleName = 'sustainable-css/color-hex-codes';

function colorHexCodesRule() {
  return (root, result) => {
    root.walkDecls(decl => {
      // Use Hexadecimal Color Codes
      if (/rgb\(/.test(decl.value)) {
        stylelint.utils.report({
          message: `Expected hexadecimal color value instead of "${decl.value}"`,
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }

      // Shorten Hex Colour Codes
      if (decl.value.startsWith("#") && decl.value.length === 7) {
        const hexColorPattern = /^#([a-fA-F0-9]{6})$/;
        if (hexColorPattern.test(decl.value)) {
          const shortHex = `#${decl.value[1]}${decl.value[3]}${decl.value[5]}`;
          if (shortHex !== decl.value) {
            stylelint.utils.report({
              message: `Expected short hex color for "${decl.value}"`,
              node: decl,
              result,
              ruleName,
              severity: 'warning',
            });
          }
        }
      }
    });
  };
}

module.exports = colorHexCodesRule;