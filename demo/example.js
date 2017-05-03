var req = require('../build/npm.getstats.js');
req.getNpmStats('jquery')
    .then(function(data) {
        console.log(data);
    })
    .catch(function(data) {
        console.log(data);
    });