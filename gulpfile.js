const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("resources/sass/**/*.scss") // Updated the source path
    .pipe(sass().on("error", sass.logError)) // To log errors instead of failing silently
    .pipe(dest("web/css")); // Updated the destination path
}

function watchTask() {
  watch(["resources/sass/**/*.scss"], buildStyles); // Updated the watch path
}

exports.default = series(buildStyles, watchTask);
