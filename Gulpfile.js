/**
 * Created by Christos on 11/01/2017.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

var watchFiles = 'assets/stylesheets/scss/**/*.scss';
var input = 'assets/stylesheets/scss/bootstrap.scss';
var output = 'assets/stylesheets/css';

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('sass', function () {
    return gulp
        .src(input)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest(output));
});

gulp.task('watch', function() {
    return gulp
        .watch(watchFiles, ['sass'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task('default', ['sass', 'watch']);
