/**
 * Created by wangyujing on 11/17/15.
 */
var fs = require('fs');
var findParse = require('./findParse');
var go = require('./globalObject');

module.exports = function (filepath) {
    if (fs.existsSync(filepath)) {
        var file = fs.readFileSync(filepath, 'utf8');
        var parses = findParse(file);
        var pathPrefix = filepath.split('views')[0];
        if (parses) {
            parses.forEach(function (p) {
                p = pathPrefix + p;
                if (!go[p]) {
                    go[p] = [];
                }
                if (go[p].indexOf(filepath) < 0) {
                    go[p].push(filepath);
                }
            });
        }

    }
};