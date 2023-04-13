const {src, dest, watch, series } = require('gulp')
const cleanCss = require('gulp-clean-css')
const sass = require('gulp-sass')(require('sass'))


function buildStyles() {
    return src('_styling-css/**/*.scss')
        .pipe(sass({
            includePaths: ['./node_modules'],
         }).on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(dest('src/style/'))
}

function watchTask() {
    watch(['_styling-css/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
