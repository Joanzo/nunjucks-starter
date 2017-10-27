var path = require('path');

module.exports = {
	rootDir: "../",						// Root dir
	srcDir: path.resolve("../src"),					// Source files
	destDir: path.resolve("../public"),				// Build destination
  tmpDir: "./tmp",           // Temporary dir
	npmDir:   "../node_modules",		// Npm dir
	port: 4000
};
