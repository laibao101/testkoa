const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

// import gulp from 'gulp';
// import nodemon from 'gulp-nodemon';

// nodemon 修改服务端代码自动重启
gulp.task('nodemon', () => nodemon({
	script: 'app.js',
	ext:'js html'
 }))
