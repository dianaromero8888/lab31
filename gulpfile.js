/*
* Dependencias
*/
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('concat-files', function(){
	gulp.src('source/*.js')
		.pipe(concat('*.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/'))
}); 