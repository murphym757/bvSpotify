var gulp = require('gulp');

  /*
    --TOP LEVEL FUNCTIONS --
    gulp.task -  Define tasks
    gulp.src -   Point to files to use
    gulp.dest -  Points to folder to output
    gulp.watch - Watch files and folders for changes
  */

gulp.task('message', () => {
    return console.log('Gulp is running...')
});