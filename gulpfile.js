const gulp = require('gulp');
const vinly_source_stream = require('vinyl-source-stream');

const BASE_OUTPUT_DIR = "./public/libs";

function copyLibraries(){
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
    const BACKEND_PORT    = Number( env.BACKEND_PORT ) || 8001;
    const BASE_API_SCHEMA = Number( env.BASE_API_SCHEMA ) || "/api/v1/";
    
    const json_content = JSON.stringify({ BACKEND_PORT, BASE_API_SCHEMA });

    return json_content;
}

function generateEnvironmentJson(){

    const json_stream = vinly_source_stream( ".env.json");

    const json_content = getEnvironmentJsonContent();

    json_stream.write( json_content );

    json_stream.end();

    return json_stream.pipe(
        gulp.dest(`${BASE_OUTPUT_DIR}/`)
    );
}

gulp.task(generateEnvironmentJson.name, generateEnvironmentJson );
gulp.task('default', gulp.parallel( copyLibraries, generateEnvironmentJson ) );