var gulp = require('gulp');
var uglify = require('gulp-uglify')
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var gulpif = require('gulp-if');
var sass = require('gulp-sass');
var minify = require('gulp-minify');

var production = process.env.NODE_ENV === 'production';

gulp.task('scripts', function(){
  return gulp.src([
  ])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascripts/source'));
});

gulp.task("babel", function () {
  return gulp.src("./public/javascripts/babel/*.js")
    .pipe(babel())
    .pipe(gulp.dest("./public/javascripts/"));
});

gulp.task('sass', function () {
  gulp.src('./public/stylesheets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('compress', function() {
  return gulp.src('./public/javascripts/source/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  gulp.watch('public/javascripts/*.{js,coffee}', ['scripts']);
  gulp.watch('public/stylesheets/**/*.scss', ['sass']);
  gulp.watch('public/javascripts/source/*.js', ['compress']);
});
