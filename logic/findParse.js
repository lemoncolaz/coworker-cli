/**
 * Created by wangyujing on 11/17/15.
 */

var pattern = /#parse\(\"([^)]+)\)/g;

module.exports = function (str) {
    var result = null,
        temppath;
    var tmparr = str.match(pattern);
    if (tmparr) {
        result = tmparr.map(function (item) {
            temppath = item.split(/\"/)[1];
            if (temppath) {
                return temppath;
            }
        });
    }
    return result;
};