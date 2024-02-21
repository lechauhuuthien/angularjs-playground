const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Define task to concatenate and minify JavaScript files
gulp.task('scripts', function() {
    return gulp.src([
            'app.js',
            'assets/js/*.js',
            'components/**/*.js',
            'services/**/*.js',
            // Add other paths for your JavaScript files
        ])
        .pipe(concat('app.min.js')) // Concatenate files into a single file
        .pipe(uglify()) // Minify JavaScript
        .pipe(gulp.dest('dist/js')); // Output bundled and minified file to dist/js directory
});

// Watch for changes in JavaScript files and run 'scripts' task
gulp.task('watch', function() {
    gulp.watch(['*.js', 'assets/js/**/*.js', 'components/**/*.js', 'services/**/*.js'], gulp.series('scripts'));
});

// Default task to run 'scripts' and 'watch' tasks
gulp.task('default', gulp.series('scripts', 'watch'));
