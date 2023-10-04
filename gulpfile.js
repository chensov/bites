const { src, dest, watch, series, task } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

// Compile SASS into CSS
function buildStyles() {
  return src("resources/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("web/css"))
    .pipe(browserSync.stream()); // Stream changes to BrowserSync
}

// Watch changes in files
function watchTask() {
  watch("resources/sass/**/*.scss", buildStyles);
  watch("templates/**/*.twig").on("change", browserSync.reload); // Updated path for twig templates
  watch("web/css/*.css").on("change", browserSync.reload); // Updated path for css files
  // If you have JS files or other assets you can add more watch statements similarly
}

// BrowserSync Task
function serve() {
  browserSync.init({
    proxy: "http://craftbites.ddev.site/",
    browser: "google chrome", // This tells BrowserSync to open the site with Google Chrome
  });
  watchTask(); // Incorporate watchTask into the serve task
}

// Define tasks using the new Gulp API format
exports.buildStyles = buildStyles;
exports.watch = watchTask;
exports.serve = serve;
exports.default = serve; // Making the serve task the default
