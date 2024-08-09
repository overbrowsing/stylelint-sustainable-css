const stylelint = require('stylelint');

const ruleName = 'sustainable-css/use-special-characters';

const htmlEntities = {
  quot: '"', amp: '&', lt: '<', gt: '>', nbsp: ' ',
  // Add more entities here if needed
};

function decodeHtmlEntity(entity) {
  const entityName = entity.slice(1, -1); // Remove & and ;
  if (entityName in htmlEntities) {
    return htmlEntities[entityName];
  }
  if (entityName.startsWith('#x')) {
    return String.fromCharCode(parseInt(entityName.slice(2), 16));
  }
  if (entityName.startsWith('#')) {
    return String.fromCharCode(parseInt(entityName.slice(1), 10));
  }
  return entity;
}

function decodeSpecialCharacter(match) {
  if (match.startsWith('&')) {
    return decodeHtmlEntity(match);
  }
  if (match.startsWith('\\u')) {
    return String.fromCharCode(parseInt(match.substr(2), 16));
  }
  if (match.startsWith('\\u{')) {
    return String.fromCodePoint(parseInt(match.substr(3, match.length - 4), 16));
  }
  return match;
}

function useSpecialCharactersRule() {
  return (root, result) => {
      const specialCharactersPattern = /&[#a-zA-Z0-9]+;|&#[xX][a-fA-F0-9]+;|&#\d+;|\\u[a-fA-F0-9]{4}|\\u\{[a-fA-F0-9]+\}/g;

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
  };
}

module.exports = useSpecialCharactersRule;
