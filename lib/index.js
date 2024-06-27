// lib/index.js
const stylelint = require("stylelint");

const ruleName = "plugin/stylelint-sustainable-css";
const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: prop => `Expected shorthand for "${prop}"`,
  noDuplicate: prop => `Duplicate property "${prop}" found`,
  shortHex: color => `Expected short hex color for "${color}"`,
  noUnitZero: value => `Expected "0" without unit, but found "${value}"`,
  noVendorPrefix: value => `Expected no vendor prefix in "${value}"`,
  noDuplicateSelectors: selector => `Duplicate selector "${selector}" found`,
  noEmptyBlock: "Empty block found",
});

const ruleFunction = function (primaryOption, secondaryOptionObject, context) {
  return function (postcssRoot, postcssResult) {
    const declaredProperties = new Set();
    const declaredSelectors = new Set();

    postcssRoot.walkDecls(decl => {
      if (["margin-top", "margin-right", "margin-bottom", "margin-left", "padding-top", "padding-right", "padding-bottom", "padding-left"].includes(decl.prop)) {
        stylelint.utils.report({
          message: messages.expected(decl.prop),
          node: decl,
          result: postcssResult,
          ruleName,
        });
      }

      if (/^0(px|em|%)$/.test(decl.value)) {
        stylelint.utils.report({
          message: messages.noUnitZero(decl.value),
          node: decl,
          result: postcssResult,
          ruleName,
        });
      }

      const hexColorPattern = /^#([a-fA-F0-9]{6})$/;
      if (hexColorPattern.test(decl.value)) {
        const shortHex = `#${decl.value[1]}${decl.value[3]}${decl.value[5]}`;
        stylelint.utils.report({
          message: messages.shortHex(decl.value),
          node: decl,
          result: postcssResult,
          ruleName,
        });
      }

      if (declaredProperties.has(decl.prop)) {
        stylelint.utils.report({
          message: messages.noDuplicate(decl.prop),
          node: decl,
          result: postcssResult,
          ruleName,
        });
      } else {
        declaredProperties.add(decl.prop);
      }

      const vendorPrefixPattern = /^-(webkit|moz|ms|o)-/;
      if (vendorPrefixPattern.test(decl.prop)) {
        stylelint.utils.report({
          message: messages.noVendorPrefix(decl.prop),
          node: decl,
          result: postcssResult,
          ruleName,
        });
      }
    });

    postcssRoot.walkRules(rule => {
      if (declaredSelectors.has(rule.selector)) {
        stylelint.utils.report({
          message: messages.noDuplicateSelectors(rule.selector),
          node: rule,
          result: postcssResult,
          ruleName,
        });
      } else {
        declaredSelectors.add(rule.selector);
      }

      if (rule.nodes.length === 0) {
        stylelint.utils.report({
          message: messages.noEmptyBlock,
          node: rule,
          result: postcssResult,
          ruleName,
        });
      }
    });
  };
};

const plugin = stylelint.createPlugin(ruleName, ruleFunction);
module.exports = plugin;
