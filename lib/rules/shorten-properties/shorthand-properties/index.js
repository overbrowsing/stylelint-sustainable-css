const stylelint = require('stylelint');

const ruleName = 'sustainable-css/shorthand-properties';

function shortHandPropertiesRule() {
  return (root, result) => {
    root.walkDecls(decl => {
      
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
    });
  };
}

module.exports = shortHandPropertiesRule;
