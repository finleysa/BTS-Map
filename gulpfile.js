var gulp = require('gulp');
var uglify = require('gulp-uglify')
var gulpif = require('gulp-if');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var minifyCss = require('gulp-minify-css');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src('./public/javascripts/source/*.js')
    .pipe(jshint());
	});

gulp.task('sass', function () {
  gulp.src('./public/stylesheets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
		.pipe(minifyCss())
    .pipe(gulp.dest('./dist/stylesheets/'));
});

gulp.task('compress', function() {
  gulp.src('./public/javascripts/source/*.js')
    .pipe(minify())
    .pipe(gulp.dest('./dist/javascripts/source/'))
});

gulp.task('css', function() {
  gulp.src('./public/stylesheets/vendor/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/stylesheets/vendor/'))
});

gulp.task('default', ['sass', 'compress', 'css', 'watch']);

gulp.task('watch', function() {
  gulp.watch('public/javascripts/source/*.js', ['compress']);
  gulp.watch('public/stylesheets/sass/*.scss', ['sass']);
	gulp.watch('public/stylesheets/vendor/*.css', ['css']);
});
