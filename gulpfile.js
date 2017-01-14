
var gulp=require('gulp');
var sass=require('gulp-sass');

gulp.task('buildsass',function(){
	gulp.src('src/sass/*.scss')
	.pipe(sass({outputStyle:'compact'}))
	.pipe(gulp.dest('src/css'))
});


gulp.task('jtsass',function(){
	gulp.watch('src/sass/*.scss',['buildsass'])
})