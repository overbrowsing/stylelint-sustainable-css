const colorHexCodes = require('./color-hex-codes');
const shorthandProperties = require('./shorthand-properties');
const numericalFontWeight = require('./numerical-font-weight');
const shorterUnits = require('./shorter-units');
const preferEm = require('./prefer-em');
const removeUnnecessaryUnits = require('./remove-unnecessary-units');
const minimiseNumericValues = require('./minimise-numeric-values');

module.exports = {
  'color-hex-codes': colorHexCodes,
  'shorthand-properties': shorthandProperties,
  'numerical-font-weight': numericalFontWeight,
  'shorter-units': shorterUnits,
  'prefer-em': preferEm,
  'minimise-numeric-values': minimiseNumericValues,
  'remove-unnecessary-units': removeUnnecessaryUnits,
  
};
