const fs = require('fs'),
	path = require('path');

function getVersionFromPackage() {
	return JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8')).version;
}

function replaceInFile(file, pattern, replacement) {
	const resolved = path.resolve(__dirname, '..', file);
	const original = fs.readFileSync(resolved, 'utf8');
	const updated = original.replace(pattern, replacement);

	if (updated !== original) {
		fs.writeFileSync(resolved, updated);
	}
}

const version = getVersionFromPackage();

replaceInFile('lib/index.js', /(version:\s*')([0-9]+\.[0-9]+\.[0-9]+.*)(')/g, '$1' + version + '$3');
replaceInFile('docs/_coverpage.md', /(>)([0-9]+\.[0-9]+\.[0-9]+.*)(<)/g, '$1' + version + '$3');
replaceInFile('openapi.yaml', /(version:\s*)([0-9]+\.[0-9]+\.[0-9]+.*)/g, '$1' + version);
