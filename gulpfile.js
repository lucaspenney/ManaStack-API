var gulp = require('gulp'),
	watch = require('gulp-watch'),
	exec = require('child_process').exec;

gulp.task('build', function() {
	exec('mkdocs build --clean', function(err, stdout, stderr) {
		//Should be fine
	});
})

gulp.task('watch', function() {
	gulp.watch('docs/*.md', ['build']);
});