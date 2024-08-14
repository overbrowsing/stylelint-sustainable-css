const stylelint = require('stylelint');

const ruleName = 'sustainable-css/no-vendor-prefixes';


function noVendorPrefixesRule() {
  return (root, result) => {
    root.walkRules(decl => {
      const vendorPrefixes = ["-webkit-", "-moz-", "-ms-", "-o-"];
      const prop = decl.prop;
      const vendorPrefix = vendorPrefixes.find(prefix => prop && prop.startsWith(prefix));
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
    });
  };
}

module.exports = noVendorPrefixesRule;
