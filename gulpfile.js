var gulp = require("gulp")
  , concat = require("gulp-concat")
  , uglify =  require("gulp-uglify")
  , uglifyCss = require("gulp-uglifycss")
  , sass = require("gulp-sass")
  , ngAnnotate =  require("gulp-ng-annotate")
  , watch = require("gulp-watch")
  , del = require("del");

var paths = {
  // views and html files
  htmlTemplates: [
    "./core/app/views/**",
    "!./core/app/views/**/*.css"
  ],
  // js libraries
  jsLibs: [
    // this are the libraries
    "./bower_components/jquery/dist/jquery.min.js",
    "./bower_components/angular/angular.min.js",
    // "./bower_components/angular-animate/angular-animate.min.js",
    "./bower_components/angular-ui-router/release/angular-ui-router.min.js",
    // this is my own js
    "./core/app/app.js",
    "./core/app/**/*.js"
  ],
  // css libraries
  scssLibs: [
    // this is the theme for bootstrap
    "./core/app/style/libs/paper.css",
    // this is my own css
    "./core/app/**/*.scss"
  ]
};

gulp.task('clean', function () {
  return del("views/**");
});

gulp.task("copyViews", ["clean"], function(){
  gulp.src(paths.htmlTemplates)
    .pipe(gulp.dest("./public/views"));
});

gulp.task("styles", function () {
  gulp.src(paths.scssLibs)
    .pipe(sass())
    .pipe(uglifyCss())
    .pipe(concat("mainStyle.css"))
    .pipe(gulp.dest("./public/style"));
});

gulp.task("scripts", function () {
  gulp.src(paths.jsLibs)
    .pipe(ngAnnotate())
    .pipe(concat("mainScripts.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./public/scripts"));
});

gulp.task("watch", function() {
  // gulp.watch("gulpfile.js", ["default"]);
  gulp.watch(paths.jsLibs, ['scripts']);
  gulp.watch(paths.scssLibs, ["styles"]);
  gulp.watch(paths.htmlTemplates, ["copyViews"]);
});

gulp.task("Working", function () {
  console.log("Working and ready");
});

gulp.task("default", ["watch", "copyViews", "styles", "scripts", "Working"]);
