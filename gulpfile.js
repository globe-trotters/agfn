/////////DEPENDENCIES/////////
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

///WATCH CHANGES TO SCSS FILES//////

/////SASS///////
gulp.task('styles', function(){
  return gulp.src('./public/styles/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./public'));
});

///WATCH CHANGES TO SCSS FILES//////
gulp.task('default',function() {
    gulp.watch('./public/styles/**/*.scss',['styles']);
});
