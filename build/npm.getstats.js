'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNpmStats = undefined;

var _qajax = require('qajax');

var _qajax2 = _interopRequireDefault(_qajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url_base = 'https://api.npmjs.org/downloads/point/1900-01-01';

var getNpmStats = function getNpmStats(packageName) {
    var today = new Date();
    var endDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var packageUrl = url_base + ':' + endDate + '/' + packageName;

    return (0, _qajax2.default)(packageUrl).then(_qajax2.default.toJSON).then(function (data) {
        return new Promise(function (resolve, reject) {
            if (data && data.downloads) {
                resolve(data.downloads);
            } else {
                throw 'Failed to get npm package stats for - ' + packageName;
            }
        });
    }).catch(function (err) {
        console.log(err);
        return Promise.reject('Failed to get npm package stats for - ' + packageName);
    });
};

exports.getNpmStats = getNpmStats;
