var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'src',
        livereload: true,
        port: 8000
    });
});

gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['index.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);