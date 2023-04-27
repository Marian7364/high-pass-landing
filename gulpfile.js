const { src, dest, series , watch} = require('gulp');
const concat = require('gulp-concat');
const image = require('gulp-image');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

function html() {
  return src('src/**/*.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

function styles() {
  return src('src/style/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

function scripts() {
  return src([
    'src/js/**/*.js',
  ])
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(dest('dist'))
  .pipe(browserSync.stream())
}

function images() {
  return src([
    'src/assets/images/**/*.jpg',
    'src/assets/images/**/*.png',
    'src/assets/images/**/*.jpeg',
    'src/assets/images/*.svg'
  ])
  .pipe(image())
  .pipe(dest('dist/images'))
}

function fonts() {
  return src([
    'scr/assets/fonts/**/*.woff2',
    'src/assets/fonts/**/*.woff'
  ])
  .pipe(dest('dist/fonts'))
}

function watchFiles() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

watch('src/**/*.html', html);
watch('src/style/**/*.css', styles);
watch('src/js/**/*.js', scripts);

exports.default = series(html, scripts, styles, images, fonts, watchFiles);
