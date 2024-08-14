const stylelint = require('stylelint');

const ruleName = 'sustainable-css/shorten-properties';

function shortenPropertiesRule() {
  return (root, result) => {

    // 1. Shorthand property optimizations for individual properties
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

    // 2. Encourage using shorthand properties where applicable
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

    root.walkDecls(decl => {
      for (const shorthandKey in shorthandProperties) {
        if (shorthandProperties.hasOwnProperty(shorthandKey)) {
          const props = shorthandProperties[shorthandKey];
          if (props.includes(decl.prop)) {
            stylelint.utils.report({
              message: `Use shorthand property "${shorthandKey}" instead of individual property "${decl.prop}".`,
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

module.exports = shortenPropertiesRule;
