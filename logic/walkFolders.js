/**
 * Created by wangyujing on 11/17/15.
 */
var fs = require('fs');
var path = require('path');
var getTmpParses = require('./getTmpParses');

function walk(dir) {
    fs.readdirSync(dir).filter(function (f) {
        return f && f[0] != '.';
    }).forEach(function (f) {
        f = path.join(dir, f);
        var stat = fs.statSync(f);
        if (stat.isDirectory()) {
            walk(f);
        } else {
            var suffix = f.split('.').pop();
            if (suffix == 'html' || suffix == 'htm') {
                getTmpParses(f);
            }
        }
    });
}

module.exports = walk;