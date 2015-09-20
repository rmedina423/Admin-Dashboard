'use strict'

var gulp = require('gulp')
var gutil = require('gulp-util')
var source = require('vinyl-source-stream')
var browserify = require('browserify')
var rimraf = require('rimraf')
var serve = require('gulp-serve')
var sass = require('gulp-sass')
var jshint = require('gulp-jshint')
var browserSync = require('browser-sync')
var nodemon = require('gulp-nodemon')
var autoprefixer = require('gulp-autoprefixer')


/****************************************
  JS
*****************************************/

var bundler = browserify({
  entries: ['./src/index.js'],
  debug: true
})

bundler.on('log', gutil.log) // output build logs to terminal

gulp.task('clean', function (cb) {
  rimraf('build', cb)
})

gulp.task('build', ['clean'], function () {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build'))
})

gulp.task('lint', function() {
  return gulp.src('./src/views/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
})


/****************************************
  SASS + Autoprefixer
*****************************************/

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css'))
})

/****************************************
  Watch
*****************************************/

gulp.task('watch', ['build'], function () {
  gulp.watch(['src/**/*.js', 'src/**/*.hbs'], ['build'])
  gulp.watch('./sass/**/*.scss', ['sass'])
  
})

// Default
gulp.task('default', ['watch'])
