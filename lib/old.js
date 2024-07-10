const stylelint = require("stylelint");

const ruleName = "plugin/stylelint-sustainable-css";

const ruleFunction = stylelint.createPlugin(ruleName, function () {
  return function (root, result) {
    root.walkDecls(decl => {

      // Shorthand Properties
      const shorthandProperties = {
        margin: ["margin-top", "margin-right", "margin-bottom", "margin-left"],
        padding: ["padding-top", "padding-right", "padding-bottom", "padding-left"],
        font: ["font-family", "font-size", "font-weight", "line-height"],
        border: ["border-width", "border-style", "border-color"],
        'text-decoration': ["text-decoration-line", "text-decoration-style"],
        background: ["background-color", "background-image", "background-repeat"],
        'list-style': ["list-style-type", "list-style-position"],
        overflow: ["overflow-x", "overflow-y"],
        flex: ["flex-grow", "flex-shrink", "flex-basis"],
        grid: ["grid-template-rows", "grid-template-columns"],
        'place-items': ["align-items", "justify-items"],
        gap: ["grid-gap", "column-gap", "row-gap"],
        transition: ["transition-property", "transition-duration"],
        column: ["column-width", "column-count"]
      };

      for (const shorthandKey in shorthandProperties) {
        if (shorthandProperties.hasOwnProperty(shorthandKey)) {
          const props = shorthandProperties[shorthandKey];
          if (props.includes(decl.prop)) {
            stylelint.utils.report({
              message: `Use shorthand property "${decl.prop}" which can be shortened to "${shorthandKey}"`,
              node: decl,
              result,
              ruleName,
              severity: "warning",
            });
            break;
          }
        }
      }

      // Use Numerical Values for font-weight
      if (decl.prop === "font-weight" && isNaN(decl.value)) {
        stylelint.utils.report({
          message: `Expected numeric value for "font-weight" instead of "${decl.value}"`,
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }

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
              severity: "warning",
            });
          }
        }
      }

      // Use transparent for Transparent Colors
      if (decl.value === "rgba(0, 0, 0, 0)") {
        stylelint.utils.report({
          message: `Expected "transparent" instead of "${decl.value}"`,
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }

      // Use Shorter Units
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

      // Using em vs rem
      if (/em$/.test(decl.value)) {
        stylelint.utils.report({
          message: "Prefer 'em' units over 'rem' for sizing, unless for global consistency.",
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }

      // Minimise Decimal Values
      if (/^0\.\d/.test(decl.value)) {
        stylelint.utils.report({
          message: `Omit the 0 before decimal value, use "${decl.value}" instead of "0${decl.value}"`,
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }

      // Minimise Zero Values
      if (/^\d+(px|em|rem|%|in|cm|mm|pt|pc|vh|vw|vmin|vmax)$/.test(decl.value)) {
        stylelint.utils.report({
          message: `Remove unnecessary units from "${decl.prop}". Consider using the unitless value instead.`,
          node: decl,
          result,
          ruleName,
          severity: 'warning',
        });
      }

      // Remove Unnecessary Units for line-height
      // const ruleFunction = stylelint.createPlugin(ruleName, function (enabled, options, context) {
      //   return function (root, result) {
      //     root.walkDecls(decl => {
      //       if (decl.prop === "line-height") {
      //         checkLineHeightDeclaration(decl, result);
      //       } else if (decl.prop.startsWith("font")) {
      //         checkFontShorthand(decl, result);
      //       }
      //     });
      //   };
      // });

      function checkLineHeightDeclaration(decl, result) {
        const unitlessValue = decl.value.replace(/[a-zA-Z%]+$/, '');
        if (unitlessValue !== decl.value) {
          stylelint.utils.report({
            message: `Remove unnecessary units from "line-height". Consider using the unitless value instead.`,
            node: decl,
            result,
            ruleName,
            severity: "warning",
          });
        }
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

      // Use Shorter Class/ID Names
      if (selector.includes(".") || selector.includes("#")) {
        const selectorParts = selector.split(/[\s>+,~]/);
        selectorParts.forEach(part => {
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

        // Combine Selectors
        if (selectorStylesMap.has(rule.selector)) {
          stylelint.utils.report({
            message: "Combine selectors with the same styles",
            node: rule,
            result,
            ruleName,
            severity: 'warning',
          });
        } else {
          selectorStylesMap.set(rule.selector, true);
        }

        // Avoid Redundant Selectors
        if (rule.selector.split(/\s+/).length > 3) {
          stylelint.utils.report({
            message: `Simplify selector "${rule.selector}" to reduce its length`,
            node: rule,
            result,
            ruleName,
            severity: 'warning',
          });
        }

        // Use Variables for Repeated Values
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
      }

      // Minimise Selector Depth
      if (getSelectorDepth(rule.selector) > 2) {
        stylelint.utils.report({
          message: `Minimise selector depth for "${rule.selector}".`,
          node: rule,
          result,
          ruleName,
          severity: "warning",
        });
      }


      if (rule.selector.match(/(?:\.|#)[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+|\s+\.?[a-zA-Z0-9_-]+)*/g) > 1) {
        stylelint.utils.report({
          message: `Avoid overly specific selector "${rule.selector}"`,
          node: rule,
          result,
          ruleName,
          severity: 'warning',
        });
      }

      // Concatenate Property Values
      const filterValues = [];
      rule.walkDecls('filter', decl => {
        filterValues.push(decl.value);
        decl.remove();
      });
      if (filterValues.length > 1) {
        stylelint.utils.report({
          message: `Combine multiple "filter" values into one declaration`,
          node: rule,
          result,
          ruleName,
          severity: 'warning',
        });
        rule.append({ prop: 'filter', value: filterValues.join(' ') });
      }

      // Combine Multiple of the Same Property Values
      const propertyValuesMap = new Map();
      rule.walkDecls(decl => {
        if (propertyValuesMap.has(decl.prop)) {
          propertyValuesMap.get(decl.prop).push(decl);
        } else {
          propertyValuesMap.set(decl.prop, [decl]);
        }
      });

      propertyValuesMap.forEach((decls, prop) => {
        if (decls.length > 1) {
          const combinedValue = decls.map(decl => decl.value).join(', ');
          decls.forEach(decl => decl.remove());
          stylelint.utils.report({
            message: `Combine multiple "${prop}" values into one declaration using commas`,
            node: rule,
            result,
            ruleName,
            severity: 'warning',
          });

          rule.append({ prop, value: combinedValue });
        }
      });

      // Minimize Vendor Prefixes
      const vendorPrefixes = ["-webkit-", "-moz-", "-ms-", "-o-"];
      const prop = decl.prop;
      const vendorPrefix = vendorPrefixes.find(prefix => prop.startsWith(prefix));
      if (vendorPrefix) {
        const standardProp = prop.replace(vendorPrefix, "");
        const hasStandardProp = root.some(node => node.prop === standardProp);
        if (!hasStandardProp) {
          stylelint.utils.report({
            message: `Avoid vendor prefix "${prop}". Use standard property instead. Use autoprefixers or browser support checks.`,
            node: decl,
            result,
            ruleName,
            severity: "warning",
          });
        } else {
          decl.remove();
        }
      }

      // Remove Unnecessary Quotes from Fonts
      if (decl.prop === "font-family" || decl.prop.startsWith("font")) {
        const fontFamilies = decl.value.split(',');
        fontFamilies.forEach(fontFamily => {
          const trimmedFont = fontFamily.trim();
          const isQuoted = trimmedFont.startsWith('"') && trimmedFont.endsWith('"');
          const isSingleQuoted = trimmedFont.startsWith("'") && trimmedFont.endsWith("'");
          if (isQuoted || isSingleQuoted) {
            const unquotedFont = trimmedFont.slice(1, -1);
            stylelint.utils.report({
              message: `Expected no quotes around font and font-family "${trimmedFont}"`,
              node: decl,
              result,
              ruleName,
              severity: "warning",
            });
          }
        });
      }

      // Minimize Use of Float
      root.walkDecls(decl => {
        if (decl.prop === "float" && (decl.value === "left" || decl.value === "right")) {
          stylelint.utils.report({
            message: `Avoid using "${decl.prop}: ${decl.value}". Use "display: flex" or "display: grid" instead.`,
            node: decl,
            result,
            ruleName,
            severity: "warning",
          });
        }
      });

      // Minimize Length of Animation Names
      root.walkAtRules(atRule => {
        if (atRule.name === "keyframes" && atRule.params.length > 1) {
          stylelint.utils.report({
            message: `Use shorter name for @keyframes animation "${atRule.params}".`,
            node: atRule,
            result,
            ruleName,
            severity: "warning",
          });
        }
      });

      // Optimise Media Queries
      const mediaQueryMap = new Map();
      root.walkAtRules(atRule => {
        if (atRule.name === "media" && atRule.params.startsWith("screen")) {
          const mediaKey = atRule.params;
          if (!mediaQueryMap.has(mediaKey)) {
            mediaQueryMap.set(mediaKey, new Set());
          }
          atRule.walkRules(rule => {
            mediaQueryMap.get(mediaKey).add(rule.selector);
          });
          if (mediaQueryMap.get(mediaKey).size > 1) {
            stylelint.utils.report({
              message: `Combine selectors within the same "${mediaKey}" media query to optimise stylesheet size.`,
              node: atRule,
              result,
              ruleName,
              severity: "warning",
            });
          }
        }
      });

      // Avoid !important Declarations
      root.walkDecls(decl => {
        if (decl.important) {
          stylelint.utils.report({
            message: `Avoid using !important. Use a more specific selector or refactor your styles.`,
            node: decl,
            result,
            ruleName,
            severity: "warning",
          });
        }
      });

      // Use :not Pseudo-Class for Exclusions
      root.walkRules(rule => {
        const selectors = rule.selectors;
        if (selectors.length > 1) {
          const mainSelector = selectors[0];
          const exclusionSelectors = selectors.slice(1);
          exclusionSelectors.forEach(selector => {
            if (selector.startsWith(mainSelector) && selector.includes(".not")) {
              stylelint.utils.report({
                message: `Use :not pseudo-class for exclusion instead of separate styles for "${mainSelector}" and "${selector}".`,
                node: rule,
                result,
                ruleName,
                severity: "warning",
              });
            }
          });
        }
      });

      // Use display: none for Hiding Elements
      root.walkDecls(decl => {
        if (decl.prop === "visibility" && decl.value === "hidden") {
          stylelint.utils.report({
            message: `Use "display: none" instead of "visibility: hidden" to completely hide elements.`,
            node: decl,
            result,
            ruleName,
            severity: "warning",
          });
        }
      });

      // Use inherit and initial Wisely
      root.walkDecls(decl => {
        if (decl.value === "inherit" || decl.value === "initial") {
          stylelint.utils.report({
            message: `Consider simplifying your style rules by avoiding direct use of "${decl.value}".`,
            node: decl,
            result,
            ruleName,
            severity: "warning",
          });
        }
      });

      // Minimize Unnecessary z-index
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

      // Use CSS Grid for Complex Layouts
      root.walkDecls(decl => {
        if (decl.prop === "display" && decl.value === "flex") {
          const parentRule = decl.parent;
          const hasFlexDirection = parentRule.some(({ prop }) => prop === "flex-direction");
          const hasFlexWrap = parentRule.some(({ prop }) => prop === "flex-wrap");
          if (hasFlexDirection && hasFlexWrap) {
            stylelint.utils.report({
              message: `Consider using CSS Grid for complex layout structures to simplify code.`,
              node: parentRule,
              result,
              ruleName,
              severity: "warning",
            });
          }
        }
      });

      // Use inline-flex for Quick Alignments
      root.walkDecls(decl => {
        if (decl.prop === "display" && decl.value === "flex") {
          const parentRule = decl.parent;
          const hasAlignItems = parentRule.some(({ prop }) => prop === "align-items");
          const hasJustifyContent = parentRule.some(({ prop }) => prop === "justify-content");
          if (hasAlignItems && hasJustifyContent) {
            stylelint.utils.report({
              message: `Consider using "display: inline-flex" for quick alignments within a single container.`,
              node: parentRule,
              result,
              ruleName,
              severity: "warning",
            });
          }
        }
      });


      // Avoid Extra Spaces
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

      // Remove Semicolon at End of Lines
      root.walkDecls(decl => {
        const { parent } = decl;
        if (parent.last === decl) {
          stylelint.utils.report({
            message: `Avoid semicolon at the end of the last declaration in a ruleset.`,
            node: decl,
            result,
            ruleName,
            severity: "warning",
          });
        }
      });

      // Compression/Minifying
      root.walkRules(rule => {
        const selector = rule.selector;
        if (selector.includes("\n") || selector.includes("  ")) {
          stylelint.utils.report({
            message: `Avoid excessive compression or minification for selector "${selector}". Maintain clean and readable CSS.`,
            node: rule,
            result,
            ruleName,
            severity: "warning",
          });
        }
      });

      // Using Shorthand Properties for Single-Side border, margin, and padding
      const shorthandMappings = {
        "padding-top": "padding: 1em 0 0 0",
        "padding-right": "padding: 0 1em 0 0",
        "padding-bottom": "padding: 0 0 1em 0",
        "padding-left": "padding: 0 0 0 1em",
        "margin-top": "margin: 1em 0 0 0",
        "margin-right": "margin: 0 1em 0 0",
        "margin-bottom": "margin: 0 0 1em 0",
        "margin-left": "margin: 0 0 0 1em",
        "border-top": "border: 1px 0 0 0 solid #000",
        "border-right": "border: 0 1px 0 0 solid #000",
        "border-bottom": "border: 0 0 1px 0 solid #000",
        "border-left": "border: 0 0 0 1px solid #000",
      };

      const checkIfShorthandIsShorter = (longhand, value, shorthand) =>
        shorthand.replace(/1(em|px solid #000)/g, value).length < `${longhand}: ${value};`.length;
      root.walkDecls(decl => {
        if (shorthandMappings[decl.prop]) {
          const shorthandValue = shorthandMappings[decl.prop];
          if (checkIfShorthandIsShorter(decl.prop, decl.value, shorthandValue)) {
            stylelint.utils.report({
              message: `Use shorthand property "${prop}" which can be shortened to "${shorthandValue}"`,
              node: decl,
              result,
              ruleName,
              severity: "warning",
            });
          }
        }
      });

      // Minimize @font-face HTTP Requests
      root.walkAtRules('font-face', atRule => {
        let srcCount = 0;

        atRule.walkDecls('src', decl => {
          srcCount++;
          if (srcCount > 1) {
            stylelint.utils.report({
              message: `Reduce @font-face HTTP requests by using fewer src declarations.`,
              node: atRule,
              result,
              ruleName,
              severity: "warning",
            });
          }
        });
      });

      // Utilize HTML Tags for Styling Text
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

      // Special Characters vs Entites vs Unicode
      const entities = require('entities');
      const specialCharactersPattern = /&[#a-zA-Z0-9]+;|&#[xX][a-fA-F0-9]+;|&#\d+;|\\u[a-fA-F0-9]{4}|\\u\{[a-fA-F0-9]+\}/g; // Matches &name;, &#code;, &#xcode;, \uXXXX and \u{XXXXX}
      function decodeSpecialCharacter(match) {
        if (match.startsWith('&')) {
          return entities.decodeHTML(match);
        }
        if (match.startsWith('\\u')) {
          return String.fromCharCode(parseInt(match.substr(2), 16));
        }
        if (match.startsWith('\\u{')) {
          return String.fromCodePoint(parseInt(match.substr(3, match.length - 4), 16));
        }
        return match;
      }

      function checkForSpecialCharacters(content, node) {
        const matches = content.match(specialCharactersPattern);
        if (matches) {
          matches.forEach(match => {
            const decodedMatch = decodeSpecialCharacter(match);
            stylelint.utils.report({
              message: `Avoid using HTML entities or Unicode instead. Consider special character "${decodedMatch}" in CSS.`,
              node,
              result,
              ruleName,
              severity: "warning",
            });
          });
        }
      }

      root.walkDecls(decl => {
        checkForSpecialCharacters(decl.value, decl);
      });

      root.walkAtRules(atRule => {
        checkForSpecialCharacters(atRule.params, atRule);
      });

      root.walkRules(rule => {
        rule.selectors.forEach(selector => {
          checkForSpecialCharacters(selector, rule);
        });
      });

      // Data URIs for Small Images
      const path = require('path');
      const fs = require('fs');
      const MAX_FILE_SIZE_KB = 32; // Maximum size in KB for embedding as Data URI

      function isSmallImage(filePath) {
        try {
          const stats = fs.statSync(filePath);
          const fileSizeInBytes = stats.size;
          const fileSizeInKB = fileSizeInBytes / 1024;
          return fileSizeInKB <= MAX_FILE_SIZE_KB;
        } catch (error) {
          console.error(`Error checking file size: ${error}`);
          return false;
        }
      }
      root.walkDecls((decl) => {
        if (decl.value.includes('url(')) {
          const matches = decl.value.match(/url\(['"]?(.*?)['"]?\)/);
          if (matches) {
            const imagePath = matches[1];
            const fullImagePath = path.resolve(path.dirname(decl.source.input.file), imagePath);
            if (isSmallImage(fullImagePath)) {
              result.warn(`Consider embedding "${imagePath}" as a Data URI to reduce HTTP requests.`, {
                node: decl,
                rule: 'data-uri-for-small-images',
                severity: 'warning',
              });
            }
          }
        }
      });

    });
  };
});

module.exports = ruleFunction;
module.exports.ruleName = ruleName;