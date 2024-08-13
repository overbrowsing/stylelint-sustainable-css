const stylelint = require('stylelint');

const ruleName = 'sustainable-css/concatenate-property-values';

function concatenatePropertyValuesRule() {
  return (root, result) => {
    root.walkRules(rule => {
      
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
          if (prop === 'filter') {
            const concatenatedValue = decls.map(decl => decl.value).join(' ');
            decls.forEach(decl => decl.remove());
            stylelint.utils.report({
              message: `Combine multiple "${prop}" values into one declaration`,
              node: rule,
              result,
              ruleName,
              severity: 'warning',
            });
            rule.append({ prop, value: concatenatedValue });
          } else {
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
        }
      });
    });
  };
}

module.exports = concatenatePropertyValuesRule;
