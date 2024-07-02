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
  useNumericFontWeight: value => `Expected numeric value for "font-weight" instead of "${value}"`,
  useHexColor: value => `Expected hexadecimal color value instead of "${value}"`,
  useTransparent: value => `Expected "transparent" instead of "${value}"`,
  noQuotesFontFamily: value => `Expected no quotes around font-family "${value}"`,
  useShorthand: prop => `Use shorthand property for "${prop}"`,
  usePlaceItems: "Use 'place-items' instead of 'align-items' and 'justify-items'",
  useShortAnimation: "Use shorthand for animation or transition properties",
  combineSelectors: "Combine selectors with the same styles",
});

const ruleFunction = function () {
  return function (postcssRoot, postcssResult) {
    const declaredProperties = new Set();
    const declaredSelectors = new Set();

    postcssRoot.walkDecls(decl => {
      const shorthandProperties = [
        ["margin-top", "margin-right", "margin-bottom", "margin-left"],
        ["padding-top", "padding-right", "padding-bottom", "padding-left"],
        ["border-width", "border-style", "border-color"],
        ["text-decoration-line", "text-decoration-style"],
        ["background-color", "background-image", "background-repeat"],
        ["list-style-type", "list-style-position"],
        ["overflow-x", "overflow-y"],
        ["flex-grow", "flex-shrink", "flex-basis"],
        ["grid-template-rows", "grid-template-columns"],
        ["align-items", "justify-items"],
        ["grid-gap", "column-gap", "row-gap"],
        ["transition-property", "transition-duration"],
        ["column-width", "column-count"]
      ];

      shorthandProperties.forEach(group => {
        if (group.includes(decl.prop)) {
          stylelint.utils.report({
            message: messages.expected(decl.prop),
            node: decl,
            result: postcssResult,
            ruleName,
            severity: 'warning',
          });
        }
      });

      if (decl.prop === "font-weight" && isNaN(decl.value)) {
        stylelint.utils.report({
          message: messages.useNumericFontWeight(decl.value),
          node: decl,
          result: postcssResult,
          ruleName,
          severity: 'warning',
        });
      }

      if (/rgb\(/.test(decl.value)) {
        stylelint.utils.report({
          message: messages.useHexColor(decl.value),
          node: decl,
          result: postcssResult,
          ruleName,
          severity: 'warning',
        });
      }

      if (decl.value === "rgba(0, 0, 0, 0)") {
        stylelint.utils.report({
          message: messages.useTransparent(decl.value),
          node: decl,
          result: postcssResult,
          ruleName,
          severity: 'warning',
        });
      }

      if (/["']/.test(decl.value) && decl.prop === "font-family") {
        stylelint.utils.report({
          message: messages.noQuotesFontFamily(decl.value),
          node: decl,
          result: postcssResult,
          ruleName,
          severity: 'warning',
        });
      }

      if (/^0(px|em|%)$/.test(decl.value)) {
        stylelint.utils.report({
          message: messages.noUnitZero(decl.value),
          node: decl,
          result: postcssResult,
          ruleName,
          severity: 'warning',
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
          severity: 'warning',
        });
      }

      if (decl.prop === "align-items" || decl.prop === "justify-items") {
        stylelint.utils.report({
          message: messages.usePlaceItems,
          node: decl,
          result: postcssResult,
          ruleName,
          severity: 'warning',
        });
      }

      if (decl.prop === "transition-property" || decl.prop === "transition-duration") {
        stylelint.utils.report({
          message: messages.useShortAnimation,
          node: decl,
          result: postcssResult,
          ruleName,
          severity: 'warning',
        });
      }

      if (declaredProperties.has(decl.prop)) {
        stylelint.utils.report({
          message: messages.noDuplicate(decl.prop),
          node: decl,
          result: postcssResult,
          ruleName,
          severity: 'warning',
        });
      } else {
        declaredProperties.add(decl.prop);
      }
    });

    postcssRoot.walkRules(rule => {
      if (declaredSelectors.has(rule.selector)) {
        stylelint.utils.report({
          message: messages.noDuplicateSelectors(rule.selector),
          node: rule,
          result: postcssResult,
          ruleName,
          severity: 'warning',
        });
      } else {
        declaredSelectors.add(rule.selector);
      }

      const similarSelectors = postcssRoot.nodes.filter(
        node => node.type === "rule" && node.selector === rule.selector
      );

      if (similarSelectors.length > 1) {
        stylelint.utils.report({
          message: messages.combineSelectors,
          node: rule,
          result: postcssResult,
          ruleName,
          severity: 'warning',
        });
      }

      if (rule.nodes.length === 0) {
        stylelint.utils.report({
          message: messages.noEmptyBlock,
          node: rule,
          result: postcssResult,
          ruleName,
          severity: 'warning',
        });
      }
    });
  };
};

module.exports = stylelint.createPlugin(ruleName, ruleFunction);
module.exports.ruleName = ruleName;
module.exports.messages = messages;
