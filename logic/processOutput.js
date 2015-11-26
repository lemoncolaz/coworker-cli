/**
 * Created by wangyujing on 11/18/15.
 */
var chalk = require('chalk');

module.exports = function (input, resultArr, full) {
    var ostart = 'Input template: ';
    if (!full) {
        console.log('────────', chalk.red.bold('COWORKER RESULTS'), '────────');
    }

    console.log('', chalk.blue.bold(ostart, chalk.red(input)));
    console.log('', chalk.blue.bold('Templates need to be tested:'));
    resultArr.forEach(function (r) {
        console.log('    ' + chalk.green(r));
    });

    if (!full) {
        console.log('========================================');
    }
};