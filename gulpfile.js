var gulp = require('gulp');
var uglify = require('gulp-uglify')
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var sass = require('gulp-sass');

var production = process.env.NODE_ENV === 'production';

gulp.task('scripts', function(){
  return gulp.src([
  ])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts/source'));
});

gulp.task('sass', function () {
  gulp.src('./public/stylesheets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('vendor', function() {
  return gulp.src([
    'public/javascripts/vendor/modernizr.js',
    'public/javascripts/vendor/placeholder.js',
    'public/javascripts/vendor/fastclick.js',
    'public/javascripts/vendor/bootstrap.js',
    'public/javascripts/vendor/leaflet.js',
    'public/javascripts/vendor/numeral.min.js',
  ]).pipe(concat('vendor.js'))
    .pipe(gulpif(production, uglify({ mangle: false })))
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('watch', function(){
  gulp.watch('public/javascripts/*.{js,coffee}', ['scripts']);
  gulp.watch('public/stylesheets/**/*.scss', ['sass']);
});
