const stylelint = require('stylelint');

const ruleName = 'sustainable-css/shorthand-optimisations';


function shorthandOptimisationsRule() {
  return (root, result) => {
    const shorthandMappings = {
      "padding-top": "padding: {value} 0 0 0",
      "padding-right": "padding: 0 {value} 0 0",
      "padding-bottom": "padding: 0 0 {value} 0",
      "padding-left": "padding: 0 0 0 {value}",
      "margin-top": "margin: {value} 0 0 0",
      "margin-right": "margin: 0 {value} 0 0",
      "margin-bottom": "margin: 0 0 {value} 0",
      "margin-left": "margin: 0 0 0 {value}",
      "border-top": "border: {value} 0 0 0 solid #000",
      "border-right": "border: 0 {value} 0 0 solid #000",
      "border-bottom": "border: 0 0 {value} 0 solid #000",
      "border-left": "border: 0 0 0 {value} solid #000",
    };

    root.walkDecls(decl => {
      const shorthandTemplate = shorthandMappings[decl.prop];
      if (shorthandTemplate) {
        const shorthandValue = shorthandTemplate.replace('{value}', decl.value);
        if (shorthandValue.length < `${decl.prop}: ${decl.value};`.length) {
          stylelint.utils.report({
            message: `Use shorthand property which can be shortened to "${shorthandValue}" instead of "${decl.prop}"`,
            node: decl,
            result,
            ruleName,
            severity: "warning",
          });
        }
      }
    });
  };
}
module.exports = shorthandOptimisationsRule;
