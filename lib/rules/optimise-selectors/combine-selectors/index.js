const stylelint = require('stylelint');

const ruleName = 'sustainable-css/combine-selectors';

function canUseVariable(prop, value) {
  const colorProperties = ['color', 'background-color', 'border-color'];
  return colorProperties.includes(prop) && value.startsWith('#');
}

function getSelectorDepth(selector) {
  return selector.split(/\s+/).length;
}

function combineSelectorsRule() {
  const selectorStylesMap = new Map();
  const variableMap = new Map();

  return (root, result) => {
    root.walkRules(rule => {

      const selector = rule.selector;
      if (selectorStylesMap.has(selector)) {
        stylelint.utils.report({
          message: "Combine selectors with the same styles",
          node: rule,
          result,
          ruleName,
          severity: 'warning',
        });
      } else {
        selectorStylesMap.set(selector, true);
      }

      if (selector.split(/\s+/).length > 3) {
        stylelint.utils.report({
          message: `Simplify selector "${selector}" to reduce its length`,
          node: rule,
          result,
          ruleName,
          severity: 'warning',
        });
      }

      if (getSelectorDepth(selector) > 2) {
        stylelint.utils.report({
          message: `Minimise selector depth for "${selector}".`,
          node: rule,
          result,
          ruleName,
          severity: "warning",
        });
      }

      rule.walkDecls(decl => {
        const prop = decl.prop;
        const value = decl.value;

        if (canUseVariable(prop, value)) {
          let varName = variableMap.get(value);
          if (!varName) {
            varName = `--${prop}-${value.replace(/[^\w]/g, "")}`;
            variableMap.set(value, varName);
            stylelint.utils.report({
              message: `Use CSS variable for "${prop}" with value "${value}".`,
              node: decl,
              result,
              ruleName,
              severity: "warning",
            });
          }
          decl.value = `var(${varName})`;
        }
      });
    });
  };
}

module.exports = combineSelectorsRule;
