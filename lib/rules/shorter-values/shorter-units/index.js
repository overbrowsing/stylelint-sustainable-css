const stylelint = require('stylelint');

const ruleName = 'sustainable-css/shorter-units';

function shorterUnitsRule() {
  return (root, result) => {
    root.walkDecls(decl => {

      if (decl.value.endsWith("px")) {
        const numericValue = parseFloat(decl.value);
        if (!isNaN(numericValue)) {
          const emValue = (numericValue / 16).toFixed(4);
          if (`${numericValue}px`.length > `${emValue}em`.length) {
            stylelint.utils.report({
              message: `Consider using 'em' units instead of 'px'. ${decl.value}px can be written as ${emValue}em, saving ${decl.value.length - emValue.length + 1} character(s).`,
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

module.exports = shorterUnitsRule;
