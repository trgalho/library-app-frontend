const gulp = require('gulp');

function copyLibraries(){
    return gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-route/angular-route.min.js',
    ]).pipe(
        gulp.dest('./public/libs/angular')
    );
}

gulp.task('default', copyLibraries );