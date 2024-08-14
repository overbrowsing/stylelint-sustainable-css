const stylelint = require('stylelint');

const ruleName = 'sustainable-css/optimise-selectors';

function canUseVariable(prop, value) {
  const colorProperties = ['color', 'background-color', 'border-color'];
  return colorProperties.includes(prop) && /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(value);
}

function getSelectorDepth(selector) {
  return selector.split(/\s+/).length;
}

function optimiseSelectorsRule() {
  const selectorStylesMap = new Map();
  const variableMap = new Map();

  return (root, result) => {

    // Walk through all rules in the CSS
    root.walkRules(rule => {
      const selector = rule.selector;
      
      // 1. Avoid overly specific selectors
      const overlySpecificMatches = selector.match(/(?:\.|#)[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+|\s+\.?[a-zA-Z0-9_-]+)*/g);
      if (overlySpecificMatches && overlySpecificMatches.length > 1) {
        stylelint.utils.report({
          message: `Avoid overly specific selector "${selector}".`,
          node: rule,
          result,
          ruleName,
          severity: 'warning',
        });
      }

      // 2. Combine selectors with the same styles
      const ruleContent = rule.toString();
      if (selectorStylesMap.has(ruleContent)) {
        stylelint.utils.report({
          message: `Combine selectors "${selectorStylesMap.get(ruleContent)}" and "${selector}" with the same styles.`,
          node: rule,
          result,
          ruleName,
          severity: 'warning',
        });
      } else {
        selectorStylesMap.set(ruleContent, selector);
      }

      // 3. Simplify selector length and minimize depth
      if (selector.split(/\s+/).length > 3) {
        stylelint.utils.report({
          message: `Simplify selector "${selector}" to reduce its length.`,
          node: rule,
          result,
          ruleName,
          severity: 'warning',
        });
      }

      if (getSelectorDepth(selector) > 2) {
        stylelint.utils.report({
          message: `Minimize selector depth for "${selector}".`,
          node: rule,
          result,
          ruleName,
          severity: "warning",
        });
      }

      // 4. Suggest using CSS variables for color properties
      rule.walkDecls(decl => {
        const prop = decl.prop;
        const value = decl.value;

        if (canUseVariable(prop, value)) {
          let varName = variableMap.get(value);
          if (!varName) {
            varName = `--${prop.replace(/-+/g, '_')}_${value.replace('#', '')}`;
            variableMap.set(value, varName);
            stylelint.utils.report({
              message: `Consider using CSS variable "${varName}" for "${prop}: ${value}".`,
              node: decl,
              result,
              ruleName,
              severity: "warning",
            });
          }
        }
      });

      // 5. Use shorter class or ID names
      if (selector.includes(".") || selector.includes("#")) {
        const selectorParts = selector.split(/[\s>+,~]/);
        selectorParts.forEach(part => {
          part = part.trim();
          if (part.startsWith(".") || part.startsWith("#")) {
            const name = part.substring(1);
            if (name.length > 15) {
              stylelint.utils.report({
                message: `Use shorter class or ID name for "${name}". Shorter names can improve readability and maintainability.`,
                node: rule,
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

module.exports = stylelint.createPlugin(ruleName, optimiseSelectorsRule);
