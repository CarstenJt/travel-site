var  gulp = require('gulp'), watch = require('gulp-watch');

gulp.task('default', function () {
    console.log('gulp task created');
});

gulp.task('html', function () {
   console.log('something useful for HTML');
});

gulp.task('styles', function () {
    console.log('Imaginge SASS tasks running here');
})

gulp.task('watch', function () {

    watch('./app/index.html', function () {
        gulp.start('html');
    })

    watch( './app/assets/styles/**/*.css', function () {
        gulp.start('styles');
    })

});
