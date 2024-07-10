const colorHexCodes = require('./color-hex-codes');
const shorthandProperties = require('./shorthand-properties');
const numericalFontWeight = require('./numerical-font-weight');
const shorterUnits = require('./shorter-units');
const preferEm = require('./prefer-em');
const removeUnnecessaryUnits = require('./remove-unnecessary-units');
const minimiseNumericValues = require('./minimise-numeric-values');
const shorterClassNames = require('./shorter-class-names');
const combineSelectors = require('./combine-selectors');
const concatenatePropertyValues = require('./concatenate-property-values');
const avoidOverlySpecificSelectors = require('./avoid-overly-specific-selectors');


module.exports = {
  'color-hex-codes': colorHexCodes,
  'shorthand-properties': shorthandProperties,
  'numerical-font-weight': numericalFontWeight,
  'shorter-units': shorterUnits,
  'prefer-em': preferEm,
  'minimise-numeric-values': minimiseNumericValues,
  'remove-unnecessary-units': removeUnnecessaryUnits,
  'shorter-class-names': shorterClassNames,
  'combine-selectors': combineSelectors,
  'avoid-overly-specific-selectors': avoidOverlySpecificSelectors,
  'concatenate-property-values': concatenatePropertyValues
};
