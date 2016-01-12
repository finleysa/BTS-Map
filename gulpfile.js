var gulp = require('gulp');
var uglify = require('gulp-uglify')
var gulpif = require('gulp-if');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var production = process.env.NODE_ENV === 'production';

gulp.task('mapCompress', function() {
	return gulp.src('./dist/maps/tiles/-1/160/51/118/*.png')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/test'));
});

gulp.task('sass', function () {
  gulp.src('./public/stylesheets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/stylesheets/'));
});

gulp.task('compress', function() {
  gulp.src('./public/javascripts/source/*.js')
    .pipe(minify())
    .pipe(gulp.dest('./dist/javascripts/source/'))
});

gulp.task('watch', function() {
  gulp.watch('public/javascripts/source/*.js', ['compress']);
  gulp.watch('public/stylesheets/sass/*.scss', ['sass']);
});
