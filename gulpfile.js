const gulp = require('gulp');
const sass = require('gulp-sass');
const vip = require('gulp-css-vip');

gulp.task('sass', () => (
  gulp.src('src/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(vip())
    .pipe(gulp.dest('dist'))
));

gulp.task('js', () => (
  gulp.src('src/*.js')
		.pipe(gulp.dest('dist'))
));

gulp.task('watch', () => {
  gulp.watch('src/*.scss', ['sass'])
		.on('change', (event) => {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});
	gulp.watch('src/*.js', ['js'])
		.on('change', (event) => {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});
});

gulp.task('default', ['sass', 'js', 'watch']);
gulp.task('build', ['sass', 'js']);
