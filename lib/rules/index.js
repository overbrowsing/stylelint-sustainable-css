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
const avoidCompression = require('./avoid-compression');
const avoidExtraSpaces = require('./avoid-extra-spaces');
const avoidImportantDeclarations = require('./avoid-important-declarations');
const useCssGrid = require('./use-css-grid');
const lowerZIndexValues = require('./lower-z-index-values');
const minimiseFloatUse = require('./minimise-float-use');
const minimiseFontfaceRequests = require('./minimise-fontface-requests');
const minimiseVendorPrefixes = require('./minimise-vendor-prefixes');
const optimiseMediaQueries = require('./optimise-media-queries');
const removeQuotesFromFonts = require('./remove-quotes-from-fonts');
const removeSemicolons = require('./remove-semicolons');
const shorthandOptimisations = require('./shorthand-optimisations');
const useDataUris = require('./use-data-uris');
const useDisplayNone = require('./use-display-none');
const useHtmlTags = require('./use-html-tags');
const avoidInheritInitial = require('./avoid-inherit-initial');
const useInlineFlexbox = require('./use-inline-flexbox');
const useSpecialCharacters = require('./use-special-characters');

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
  'concatenate-property-values': concatenatePropertyValues,
  'avoid-compression': avoidCompression,
  'avoid-extra-spaces': avoidExtraSpaces,
  'avoid-important-declarations': avoidImportantDeclarations,
  'use-css-grid': useCssGrid,
  'lower-z-index-values': lowerZIndexValues,
  'minimise-float-use': minimiseFloatUse,
  'minimise-fontface-requests': minimiseFontfaceRequests,
  'minimise-vendor-prefixes': minimiseVendorPrefixes,
  'optimise-media-queries': optimiseMediaQueries,
  'remove-quotes-from-fonts': removeQuotesFromFonts,
  'remove-semicolons': removeSemicolons,
  'shorthand-optimisations': shorthandOptimisations,
  'use-data-uris': useDataUris,
  'use-display-none': useDisplayNone,
  'use-html-tags': useHtmlTags,
  'avoid-inherit-initial': avoidInheritInitial,
  'use-inline-flexbox': useInlineFlexbox,
  'use-special-characters': useSpecialCharacters
};
