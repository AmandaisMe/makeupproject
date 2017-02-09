//请求模块
var gulp =require('gulp');
var sass=require('gulp-sass');
var browser=require('browser-sync');

//创建任务（执行任务）

gulp.task('buildsass',function(){
	gulp.src('src/sass/*.scss')

	//编译scss文件
	.pipe(sass({outputStyle:'compact'}).on('error',sass.logError))
	//输出文件
	.pipe(gulp.dest('src/css'))
	//编译成功后 利用browser-sync刷新页面
	.pipe(browser.reload({stream:true}))
})
//监听文件

gulp.task('jtsass',function(){
	//监听文件，当文件改变时，执行buildsass任务
	gulp.watch('src/sass/*.scss',['buildsass']);
});
//利用 browser-sync来实行刷新页面
gulp.task('server',function(){
	browser({
		// server:{
		// 	baseDir:'.src/'
		// },
		// port:4000,
		//代理
		proxy:'http://localhost/makeup/src',
		//监听文件
		files:['./src/*.html'],

	});

	gulp.watch('./src/sass/*.scss',['buildsass']);
	gulp.watch('./src/php/*.php').on('change',browser.reload);
});

//合并插件
var concat=require('gulp-concat');
//压缩插件
var uglify=require('gulp-uglify');
//重命名
// var rename=require('gulp-rename');

gulp.task('mergejs',function(){
	return gulp.src(['./src/js/index.js','./src/js/buycar.js','./src/js/indexcor.js'])
		.pipe(concat('index.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(uglify({
			compress:false,//类型。boolean 默认：true 是否完全压缩
			preserveComments:'all' //保留所有注释
		}))

		// .pipe(rename({
		// 	suffix:'.min' //修改后缀名
		// }))
		// .pipe(gulp.dest('dist/js'))
})