/**
 * Created by dhwchoub on 5/5/2019.
 */

const gulp = require('gulp'),
    gutil = require('gulp-util'),
    fs = require('fs'),
    exec = require('child_process').exec,
    runSequence = require('run-sequence'),
    path = require('path');

const isWin = /^win/.test(process.platform);
let seleniumServer;
const cmd = isWin ? 'wdio.cmd' : 'wdio';
const webdriver = require('gulp-webdriver');


gulp.task('run-wdio', (cb) => {
    return runSequence('start-selenium-and-wdio', 'stop-selenium', cb);
});

gulp.task('start-selenium-and-wdio', () => {

    const Chromeexecutable = isWin ? './node_modules/chromedriver/lib/chromedriver/chromedriver.exe' : 'node_modules/chromedriver/bin/chromedriver';
    const ff = './tools/geckodriver.exe';
    const IE = './tools/IEDriverServer.exe'
    let command = `java -jar -Dwebdriver.chrome.driver=${Chromeexecutable} ./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.3.1.jar -log ./seleniumLog.txt`;
    gutil.log('Starting Selenium Server');
    seleniumServer = exec(command, function () {
        seleniumServer = null;
    });
    return gulp.src('wdio.conf.js').pipe(webdriver());


});

gulp.task('stop-selenium', (cb) => {

    if (seleniumServer) {
        process.kill(seleniumServer.pid, 'SIGINT');
    }
    cb();
    process.exit(0);

});








