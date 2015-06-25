'use_strict';
var requestify = require('requestify');

exports.getRequest = function (url, options) {
    if (url) {
        requestify.get(url, options)
            .then(function (err, response) {
                if (err) {
                    return err;
                } else {
                    var obj = response.getBody();
                    console.log(obj);
                    console.log(obj.length)

                    return response.getBody();
                }
            })
    }
};
exports.postData = function (url, dataObject) {
    if (url && dataObject) {
        requestify.post(url, dataObject)
            .then(function (err, response) {
                if (err) {
                    return err
                } else {
                    return response.getBody();
                }
            })
    }
}


