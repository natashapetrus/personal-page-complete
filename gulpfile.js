const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const replace = require('gulp-string-replace');
const rename = require('gulp-rename');
const cssFiles = '_assets/css/*.?(s)css';
const clean = require('gulp-clean');
const jsFiles = '_assets/js/*.js';

gulp.task('clean', function () {
  return gulp.src([
      '_assets/js/all.js',
      '_assets/css/all.scss'
    ], {read: false})
    .pipe(clean());
});

gulp.task('concatJS', () => {
  return gulp.src([
      '_assets/js/jquery-2.1.4.min.js',
      '_assets/js/bootstrap.min.js',
      '_assets/js/mo.min.js',
      '_assets/js/owl.carousel.min.js',
      '_assets/js/magnific-popup.min.js',
      '_assets/js/circle-progress.min.js',
      '_assets/js/main.js',
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('_assets/js'));
});

gulp.task('concatCSS', () => {
  return gulp.src([
      cssFiles
    ])
    .pipe(sass())
    .pipe(concat('all.css'))
    // sample hack so jekyll-assets can resolve a file
    // if the src is replaced with relative url to all.scss
    // .pipe(replace(/url\(.*modified\.png\)/gi, function () {
    //   return 'url(asset_path(\'modified.png\'))';
    // }))
    // .pipe(replace(/asset_url\(.*modified\.png.*\)/gi, function () {
    //   return 'url(asset_path(\'modified.png\'))';
    // }))
    // end block
    .pipe(rename({
      extname: '.scss'
    }))    
    .pipe(gulp.dest('_assets/css'));
});

gulp.task('default', ['concatCSS', 'concatJS']);