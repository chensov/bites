const { src, dest, watch, series, task } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

function buildStyles() {
  return src("resources/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("web/css"))
    .pipe(browserSync.stream());
}

function watchTask() {
  watch("resources/sass/**/*.scss", buildStyles);
  watch("templates/**/*.twig").on("change", browserSync.reload);
  watch("web/css/*.css").on("change", browserSync.reload);
}

function serve() {
  browserSync.init({
    proxy: "http://craftbites.ddev.site/",
    browser: "google chrome",
  });
  watchTask();
}

exports.buildStyles = buildStyles;
exports.watch = watchTask;
exports.serve = serve;
exports.default = serve;
