/**
 * Created by wangyujing on 11/17/15.
 */
function walk(o, target, store) {
    var t = o[target];
    if (t && t.length > 0) {
        t.forEach(function (tmt) {
            walk(o, tmt, store);
        });
    } else {
        if (store.indexOf(target) < 0) {
            store.push(target);
        }
    }
}

module.exports = function (g, path) {
    var result = [];
    walk(g, path, result);
    return result;
};