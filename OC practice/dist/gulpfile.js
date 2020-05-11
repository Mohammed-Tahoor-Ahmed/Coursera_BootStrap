const gulp = require('gulp');
gulp.task('processHTML', () => {
    gulp.src('*.html')
      .pipe(gulp.dest('dist'));
  });

  gulp.task('processJS', () => {
    gulp.src('*.js')
      .pipe(jshint({
          esversion: 6
      }))
      .pipe(jshint.reporter('default'))
      .pipe(gulp.dest('dist'));
  });
  
  const jshint = require('gulp-jshint');
