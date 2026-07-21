const fs = require('fs'),
	esbuild = require('esbuild'),
	path = require('path');

const watch = process.argv.includes('--watch');

const builds = [
	{
		entryPoint: 'example/browser/js/startup.event.vue.js',
		outfile: 'example/browser/example.event.js'
	},
	{
		entryPoint: 'example/browser/js/startup.report.vue.js',
		outfile: 'example/browser/example.report.js'
	}
];

const commonOptions = {
	bundle: true,
	format: 'iife',
	legalComments: 'eof',
	logLevel: 'info',
	platform: 'browser',
	target: 'es2017'
};

function optionsFor(build) {
	return Object.assign({}, commonOptions, {
		entryPoints: [ path.resolve(__dirname, '..', build.entryPoint) ],
		outfile: path.resolve(__dirname, '..', build.outfile),
		plugins: [ cleanOutputPlugin(build) ]
	});
}

function cleanOutput(build) {
	const file = path.resolve(__dirname, '..', build.outfile);
	const original = fs.readFileSync(file, 'utf8');
	const updated = original.replace(/[ \t]+$/gm, '');

	if (updated !== original) {
		fs.writeFileSync(file, updated);
	}
}

function cleanOutputPlugin(build) {
	return {
		name: 'clean-output',
		setup(buildContext) {
			buildContext.onEnd((result) => {
				if (result.errors.length === 0) {
					cleanOutput(build);
				}
			});
		}
	};
}

async function buildOnce() {
	await Promise.all(builds.map((build) => esbuild.build(optionsFor(build))));
}

async function watchBuilds() {
	const contexts = await Promise.all(builds.map((build) => esbuild.context(optionsFor(build))));

	await Promise.all(contexts.map((context) => context.watch()));

	console.log('Watching example bundles...');
}

if (watch) {
	watchBuilds().catch((error) => {
		console.error(error);

		process.exit(1);
	});
} else {
	buildOnce().catch((error) => {
		console.error(error);

		process.exit(1);
	});
}
