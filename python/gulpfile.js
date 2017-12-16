// 引入要用的gulp插件
var gulp_uglify=require('gulp-uglify');

var gulp_clean_css=require('gulp-clean-css');
var gulp_htmlmin=require('gulp-htmlmin');
var gulp_imagemin=require('gulp-imagemin');
var gulp_tinypng_nokey=require('gulp-tinypng-nokey');
// 引入gulp模块
var gulp=require('gulp');
// 引入重命名模块
// var gulp_rename=require('gulp-rename');

// task开启一个任务
gulp.task('js',function(){
  gulp.src('./js/c*.js')
  .pipe(gulp_uglify())
  .pipe(gulp.dest('./min/js'));
})

gulp.task('css',function(){
  gulp.src('./css/*.css')
  .pipe(gulp_clean_css())
  .pipe(gulp.dest('./min/css'));
})



gulp.task('html',function(){
  var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
// HTML
  gulp.src('./*.html')
  .pipe(gulp_htmlmin(options))
  .pipe(gulp.dest('./min'));
})
// 图片
gulp.task('testimage',function(){
  gulp.src('./img/*.png')
  .pipe(gulp_tinypng_nokey())
  .pipe(gulp.dest('./min/img'));
})

gulp.task("default",['js','css','html','testimage'],function(){
  console.log('压缩完毕');
})
