const stylelint = require('stylelint');

const ruleName = 'sustainable-css/use-data-uris';

function useDataUrisRule() {
  return (root, result) => {
    // Data URIs for Small Images
    const path = require('path');
    const fs = require('fs');
    const MAX_FILE_SIZE_KB = 32; // Maximum size in KB for embedding as Data URI

    function isSmallImage(filePath) {
      try {
        const stats = fs.statSync(filePath);
        const fileSizeInBytes = stats.size;
        const fileSizeInKB = fileSizeInBytes / 1024;
        return fileSizeInKB <= MAX_FILE_SIZE_KB;
      } catch (error) {
        console.error(`Error checking file size: ${error}`);
        return false;
      }
    }
    root.walkDecls((decl) => {
      if (decl.value.includes('url(')) {
        const matches = decl.value.match(/url\(['"]?(.*?)['"]?\)/);
        if (matches) {
          const imagePath = matches[1];
          const fullImagePath = path.resolve(path.dirname(decl.source.input.file), imagePath);
          if (isSmallImage(fullImagePath)) {
            result.warn(`Consider embedding "${imagePath}" as a Data URI to reduce HTTP requests.`, {
              node: decl,
              ruleName,
              severity: 'warning',
            });
          }
        }
      }
    }); 
  };
}

module.exports = useDataUrisRule;
