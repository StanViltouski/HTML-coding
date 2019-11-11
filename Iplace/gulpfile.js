const gulp = require('gulp'),
	  concat = require('gulp-concat'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      uglify = require('gulp-uglify'),
      del = require('del'),
      browserSync = require('browser-sync').create(),
      sourcemaps = require('gulp-sourcemaps');


function styles() {
	return gulp.src('./src/scss/**/*.scss')
				.pipe(sourcemaps.init())
					.pipe(concat('styles.scss'))
					.pipe(autoprefixer({
						overrideBrowserslist:  ['> 0.1%'],
						cascade: false
					}))
					.pipe(sass())
					//.pipe(cleanCSS({level: 2}))
				.pipe(sourcemaps.write('.'))
				.pipe(gulp.dest('./build/css'))
				.pipe(browserSync.stream());

}


function scripts() {
	return gulp.src(['./src/js/**/*.js',
					'node_modules/jquery/dist/jquery.min.js',
					'node_modules/popper.js/dist/umd/popper.min.js',
					])
				.pipe(sourcemaps.init())
					.pipe(concat('main.js'))
					.pipe(uglify({toplevel: true}))
				.pipe(sourcemaps.write('.'))
				.pipe(gulp.dest('./build/js'))
				.pipe(browserSync.stream());
}


function watch() {
	browserSync.init({
        server: {
            baseDir: "./"
        },
        //tunnel: true
    });
	gulp.watch('./src/scss/**/*.scss', styles);
	gulp.watch('./src/js/**/*.js', scripts);
	gulp.watch('./*.html', browserSync.reload);
}


function clean() {
	 return del(['build/*']);
}


gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, 
						gulp.parallel(styles, scripts)
						));
gulp.task('start', gulp.series('build', 'watch'));