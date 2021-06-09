'use strict';

const { series, parallel } = require( 'gulp' );
const browserSync = require( 'browser-sync' ).create();
const gulp = require( 'gulp' );
const rtlcss = require( 'gulp-rtlcss' );
const rename = require( 'gulp-rename' );
const concat = require( 'gulp-concat' );
const autoprefixer = require( 'gulp-autoprefixer' );
const sass = require( 'gulp-sass' );
sass.compiler = require( 'node-sass' );

const sassSrc = './assets/src/sass/';
const jsSrc = './assets/src/js/';
const cssDest = './assets/css/';
const jsDest = './assets/js/';

const sassTask = ( cb ) => {
	return gulp.src( sassSrc + 'style.scss' )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( autoprefixer( { cascade: false } ) )
		.pipe( gulp.dest( cssDest ) )
		.pipe( browserSync.stream() );
	cb();
};

const rtlCssTask = ( cb ) => {
	return gulp.src( cssDest + 'style.css' )
		.pipe( rtlcss() )
		.pipe( rename( 'style-rtl.css' ) )
		.pipe( gulp.dest( cssDest ) );
	cb();
};

const rtlCssConcatTask = ( cb ) => {
	return gulp.src( [ './style.css', cssDest + 'style-rtl.css' ] )
		.pipe( concat( 'style-rtl.css' ) )
		.pipe( gulp.dest( './' ) );
	cb();
};

function liveServerTask( cb ) {
	browserSync.init( {
		proxy: 'dev.local',
	} );
	gulp.watch( [ sassSrc + '**/*.scss' ] ).on( 'change', gulp.series( sassTask ) );
	gulp.watch( './**/*.php' ).on( 'change', browserSync.reload );
	cb();
}

exports.default = series( sassTask, liveServerTask );
exports.rtlcss = series( rtlCssTask, rtlCssConcatTask );
