let gulp = require('gulp'),
  sass = require('gulp-sass')(require('sass')),
  browserSync = require('browser-sync').create();

const paths = {
  scss: {
    src: 'scss/style.scss',
    dest: 'css',
    watch: 'scss/**/*.scss',
  }
}

// Compile sass into CSS & auto-inject into browsers
function styles () {
  return gulp.src([paths.scss.src])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(browserSync.stream())
}
function serve () {
  gulp.watch([paths.scss.watch], styles).on('change', browserSync.reload)
}

const build = gulp.series(styles, gulp.parallel(serve))

exports.styles = styles
exports.serve = serve

exports.default = build
