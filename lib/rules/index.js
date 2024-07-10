const avoidCompression = require('./avoid-compression');
const avoidExtraSpaces = require('./avoid-extra-spaces');
const avoidImportantDeclarations = require('./avoid-important-declarations');
const avoidInheritInitial = require('./avoid-inherit-initial');
const avoidOverlySpecificSelectors = require('./avoid-overly-specific-selectors');
const combineSelectors = require('./combine-selectors');
const colorHexCodes = require('./color-hex-codes');
const concatenatePropertyValues = require('./concatenate-property-values');
const lowerZIndexValues = require('./lower-z-index-values');
const minimiseFloatUse = require('./minimise-float-use');
const minimiseFontfaceRequests = require('./minimise-fontface-requests');
const minimiseNumericValues = require('./minimise-numeric-values');
const minimiseVendorPrefixes = require('./minimise-vendor-prefixes');
const numericalFontWeight = require('./numerical-font-weight');
const optimiseMediaQueries = require('./optimise-media-queries');
const preferEm = require('./prefer-em');
const removeQuotesFromFonts = require('./remove-quotes-from-fonts');
const removeSemicolons = require('./remove-semicolons');
const removeUnnecessaryUnits = require('./remove-unnecessary-units');
const shorthandOptimisations = require('./shorthand-optimisations');
const shorthandProperties = require('./shorthand-properties');
const shorterClassNames = require('./shorter-class-names');
const shorterUnits = require('./shorter-units');
const useCssGrid = require('./use-css-grid');
const useDataUris = require('./use-data-uris');
const useDisplayNone = require('./use-display-none');
const useHtmlTags = require('./use-html-tags');
const useInlineFlexbox = require('./use-inline-flexbox');
const useSpecialCharacters = require('./use-special-characters');

module.exports = {
  'avoid-compression': avoidCompression,
  'avoid-extra-spaces': avoidExtraSpaces,
  'avoid-important-declarations': avoidImportantDeclarations,
  'avoid-inherit-initial': avoidInheritInitial,
  'avoid-overly-specific-selectors': avoidOverlySpecificSelectors,
  'color-hex-codes': colorHexCodes,
  'combine-selectors': combineSelectors,
  'concatenate-property-values': concatenatePropertyValues,
  'lower-z-index-values': lowerZIndexValues,
  'minimise-float-use': minimiseFloatUse,
  'minimise-fontface-requests': minimiseFontfaceRequests,
  'minimise-numeric-values': minimiseNumericValues,
  'minimise-vendor-prefixes': minimiseVendorPrefixes,
  'numerical-font-weight': numericalFontWeight,
  'optimise-media-queries': optimiseMediaQueries,
  'prefer-em': preferEm,
  'remove-quotes-from-fonts': removeQuotesFromFonts,
  'remove-semicolons': removeSemicolons,
  'remove-unnecessary-units': removeUnnecessaryUnits,
  'shorthand-optimisations': shorthandOptimisations,
  'shorthand-properties': shorthandProperties,
  'shorter-class-names': shorterClassNames,
  'shorter-units': shorterUnits,
  'use-css-grid': useCssGrid,
  'use-data-uris': useDataUris,
  'use-display-none': useDisplayNone,
  'use-html-tags': useHtmlTags,
  'use-inline-flexbox': useInlineFlexbox,
  'use-special-characters': useSpecialCharacters
};
