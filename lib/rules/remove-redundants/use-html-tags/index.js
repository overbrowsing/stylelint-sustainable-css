const stylelint = require('stylelint');

const ruleName = 'sustainable-css/use-html-tags';

function useHtmlTagsRule() {
  return (root, result) => {
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
  };
}

module.exports = useHtmlTagsRule;
