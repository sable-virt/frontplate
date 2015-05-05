var gulp = require('gulp'),
    inquirer = require('inquirer'),
    async = require('async'),
    _ = require('lodash'),
    fs = require('fs'),
    path = require('path'),
    ejs = require('ejs'),
    colors = require('colors');

var SRC_DIR = require('./constants/scaffold').SRC_DIR;
var INQUIRY = require('./constants/scaffold').INQUIRY;
var directories = [];

gulp.task('sf', function (callback) {
    async.waterfall([
        init,
        question
    ], function(err, result) {
        if (err) throw new Error(err);
        scaffold(result,callback);
    });
});

/**
 * srcディレクトリに存在するディレクトリ一覧を取得
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
function init(next) {
    fs.readdir(SRC_DIR, function(err, files) {
        if (err) throw new Error(err);
        directories = files.filter(function(file){
            return fs.statSync(SRC_DIR+'/'+file).isDirectory();
        }).map(function(file) {
            return SRC_DIR + '/' + file;
        });
        next(null,{
            dir: directories[0] || ''
        });
    });
}

/**
 * 作成するファイルの質問をしていく
 * @param  {[type]}   args [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
function question(args,next) {
    // ディレクトリがある場合は選択させる
    if (directories.length > 1) {
        INQUIRY.unshift({
            type: "list",
            name: "dir",
            message: "Where do you create files",
            choices: directories
        });
    }
    inquirer.prompt(INQUIRY, function( answers ) {
        _.merge(answers,args);
        next(null,answers);
    });
}

/**
 * scaffoldを実行
 * @param  {[type]} err    [description]
 * @param  {[type]} result [description]
 * @return {[type]}        [description]
 */
function scaffold(result,callback) {
    require(result.file.template + 'template.js')(result,function(params) {
        var file = fs.readFileSync(result.file.template + 'template.ejs');
        var data = ejs.render(file.toString(),params);
        var filepath = path.join(result.dir,result.file.dir,result.name+result.file.ext);
        fs.open(filepath, 'ax+', 384 /*=0600*/, function(err, fd) {
            if (err) {
                if (err.code !== 'EEXIST') {
                    throw new Error(err);
                }
                // ファイルが存在する場合は上書きの確認をする
                checkOverwrite(filepath,data,callback);
            } else {
                // ファイル新規作成
                writeFile(fd,data,function() {
                    fs.close(fd,function(err) {
                        var message = String('[create] ' + filepath);
                        console.log(colors.underline.green(message));
                        callback();
                    });
                });
            }
        });
    });

}

function checkOverwrite(filepath,data,callback) {
    // ファイルの上書き確認
    inquirer.prompt([{
        type: "confirm",
        name: "overwrite",
        default: false,
        message: "Already exists file.Is it overwrite?",
    }], function( answers ) {
        var message = '';
        // 上書きしないならそのまま終了
        if (!answers.overwrite) {
            message = String('[cancel] ' + filepath);
            console.log(colors.underline.red(message));
            return callback();
        }
        // ファイルを上書き
        writeFile(filepath,data,function() {
            message = String('[overwrite] ' + filepath);
            console.log(colors.underline.yellow(message));
            callback();
        });
    });
}

/**
 * ファイルを書き出す
 * @param {[type]}   filepath [description]
 * @param {[type]}   data     [description]
 * @param {Function} callback [description]
 */
function writeFile(filepath,data,callback) {
    var func = fs.writeFile;
    if (typeof filepath !== 'string') {
        func = fs.write;
    }
    func(filepath,data,function(err) {
        if (err) throw new Error('cannot overwrite file - ' + filepath);
        callback();
    });
}
