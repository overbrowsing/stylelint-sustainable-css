const avoidDuplicateMediaQueries = require('./avoid-duplicate-media-queries');
const concatenatePropertyValues = require('./concatenate-property-values');
const noImportantTags = require('./no-important-tags');
const noSemicolons = require('./no-semicolons');
const noVendorPrefixes = require('./no-vendor-prefixes');
const optimizeSelectors = require('./optimize-selectors');
const removeRedundancies = require('./remove-redundancies');
const shortenProperties = require('./shorten-properties');
const shortenUnits = require('./shorten-units');
const useSpecialCharacters = require('./use-special-characters');

module.exports = {
  'avoid-duplicate-media-queries': avoidDuplicateMediaQueries,
  'concatenate-property-values': concatenatePropertyValues,
  'no-important-tags': noImportantTags,
  'no-semicolons': noSemicolons,
  'no-vendor-prefixes': noVendorPrefixes,
  'optimize-selectors': optimizeSelectors,
  'remove-redundancies': removeRedundancies,
  'shorten-properties': shortenProperties,
  'shorten-units': shortenUnits,
  'use-special-characters': useSpecialCharacters
};
