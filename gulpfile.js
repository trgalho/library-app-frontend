const gulp = require('gulp');
const vinly_source_stream = require('vinyl-source-stream');

const BASE_OUTPUT_DIR = "./public/libs";

function copyAngularJs(){
    return gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-route/angular-route.min.js',
    ]).pipe(
        gulp.dest(`${BASE_OUTPUT_DIR}/angular`)
    );
}

const { env } = process;

function getEnvironmentJsonContent(){
    const BACKEND_PORT    = Number( env.BACKEND_PORT ) || 8000;
    const BASE_API_SCHEMA = Number( env.BASE_API_SCHEMA ) || "api/v1/";
    
    const json_content = JSON.stringify({ BACKEND_PORT, BASE_API_SCHEMA });

    return json_content;
}

function generateEnvironmentJs(){

    const json_stream = vinly_source_stream( ".env.js");

    const json_content = getEnvironmentJsonContent();

    json_stream.write( `export default ${json_content}` );

    json_stream.end();

    return json_stream.pipe(
        gulp.dest(`${BASE_OUTPUT_DIR}/`)
    );
}

function copyCss(){
    return gulp.src("./node_modules/normalize.css/normalize.css")
    .pipe(
        gulp.dest(`${BASE_OUTPUT_DIR}/css`)
    )
}

gulp.task(generateEnvironmentJs.name, generateEnvironmentJs );
gulp.task('default', gulp.parallel( copyAngularJs, generateEnvironmentJs, copyCss ) );