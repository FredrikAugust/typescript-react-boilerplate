const tsc = require('typescript');
const tsConfig = require('../tsconfig.json');

module.exports = {
  /**
  * Transpiles typescript to javascript.
  * 
  * @param {any} src 
  * @param {any} path 
  * @returns {any} Transpiled TS (to JS)
  */
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx') || path.endsWith('.js')) {
      return tsc.transpile(src, tsConfig.compilerOptions, path, []);
    }

    return src;
  }
};