const gulp = require('gulp');

const fs = require('fs');

const AWS = require('aws-sdk'),
	awspublish = require('gulp-awspublish'),
	browserify = require('browserify'),
	buffer = require('vinyl-buffer'),
	merge = require('merge-stream'),
	rename = require('gulp-rename'),
	replace = require('gulp-replace'),
	source = require('vinyl-source-stream');

function getVersionFromPackage() {
	return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
}

gulp.task('embed-version', () => {
	const version = getVersionFromPackage();

	const index = gulp.src(['./lib/index.js'])
		.pipe(replace(/(version:\s*')([0-9]+\.[0-9]+\.[0-9]+.*)(')/g, '$1' + version + '$3'))
		.pipe(gulp.dest('./lib/'));

	const coverpage = gulp.src(['./docs/_coverpage.md'])
		.pipe(replace(/(>)([0-9]+\.[0-9]+\.[0-9]+.*)(<)/g, '$1' + version + '$3'))
		.pipe(gulp.dest('./docs/'));

	return merge(index, coverpage);
});

gulp.task('build-example-event-bundle', () => {
	return browserify([ './example/browser/js/startup.event.vue.js' ])
		.bundle()
		.pipe(source('example.event.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./example/browser'));
});

gulp.task('build-example-report-bundle', () => {
	return browserify([ './example/browser/js/startup.report.vue.js' ])
		.bundle()
		.pipe(source('example.report.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./example/browser'));
});

gulp.task('build-example-bundles', gulp.series(
	'build-example-event-bundle',
	'build-example-report-bundle'
));

gulp.task('build', gulp.series('build-example-bundles'));

gulp.task('upload-example-to-S3', () => {
	let publisher = awspublish.create({
		region: 'us-east-1',
		params: {
			Bucket: 'barchart-examples'
		},
		credentials: new AWS.SharedIniFileCredentials({profile: 'default'})
	});

	let headers = {'Cache-Control': 'no-cache'};
	let options = {};

	return gulp.src(['./example/browser/example.event.html', './example/browser/example.event.js', './example/browser/example.event.css', './example/browser/example.report.html', './example/browser/example.report.js', './example/browser/example.report.css',])
		.pipe(rename((path) => {
			path.dirname = 'events-client-js';
		}))
		.pipe(publisher.publish(headers, options))
		.pipe(publisher.cache())
		.pipe(awspublish.reporter());
});

gulp.task('deploy-examples', gulp.series('upload-example-to-S3'));

gulp.task('watch', () => {
	gulp.watch(['./lib/**/*.js', './example/browser/js/*.js'], gulp.series('build-example-bundles'));
});
