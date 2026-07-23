const fs = require('fs'),
	path = require('path');

const { PutObjectCommand, S3Client } = require('@aws-sdk/client-s3'),
	{ fromIni } = require('@aws-sdk/credential-providers');

const CACHE_CONTROL = 'no-cache';

const contentTypes = {
	'.css': 'text/css',
	'.html': 'text/html',
	'.js': 'application/javascript',
	'.json': 'application/json',
	'.md': 'text/markdown',
	'.png': 'image/png',
	'.svg': 'image/svg+xml',
	'.yaml': 'application/yaml',
	'.yml': 'application/yaml'
};

function getContentType(file) {
	return contentTypes[path.extname(file)] || 'application/octet-stream';
}

function toS3Key(key) {
	return key.split(path.sep).join('/');
}

function listFiles(directory) {
	return fs.readdirSync(directory).reduce((files, name) => {
		const file = path.join(directory, name);
		const stat = fs.statSync(file);

		if (stat.isDirectory()) {
			return files.concat(listFiles(file));
		}

		files.push(file);

		return files;
	}, [ ]);
}

async function uploadFiles(bucket, files) {
	const s3 = new S3Client({
		region: 'us-east-1',
		credentials: fromIni({ profile: 'default' })
	});

	await Promise.all(files.map((file) => {
		return s3.send(new PutObjectCommand({
			Body: fs.createReadStream(file.source),
			Bucket: bucket,
			CacheControl: CACHE_CONTROL,
			ContentType: getContentType(file.source),
			Key: toS3Key(file.key)
		}));
	}));
}

async function deployExamples() {
	const root = path.resolve(__dirname, '..');

	const files = [
		'example/browser/example.event.html',
		'example/browser/example.event.js',
		'example/browser/example.event.css',
		'example/browser/example.report.html',
		'example/browser/example.report.js',
		'example/browser/example.report.css'
	].map((file) => {
		return {
			key: path.join('events-client-js', path.basename(file)),
			source: path.join(root, file)
		};
	});

	await uploadFiles('barchart-examples', files);
}

async function deployDocumentation() {
	const root = path.resolve(__dirname, '..');
	const docs = path.join(root, 'docs');

	const files = listFiles(docs).map((file) => {
		return {
			key: path.join('events-client-js', path.relative(docs, file)),
			source: file
		};
	});

	await uploadFiles('docs.barchart.com', files);
}

async function main() {
	const target = process.argv[2];

	if (target === 'examples') {
		await deployExamples();
	} else if (target === 'documentation') {
		await deployDocumentation();
	} else {
		throw new Error('Expected deployment target: examples or documentation.');
	}
}

main().catch((error) => {
	console.error(error);

	process.exit(1);
});
