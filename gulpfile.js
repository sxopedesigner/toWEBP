const gulp = require('gulp');
const webp = require('gulp-webp');

gulp.task('default', () =>
    gulp.src('images/**/*.{png,jpg,jpeg,svg}')
        .pipe(webp())
        .pipe(gulp.dest('images/webp'))
);