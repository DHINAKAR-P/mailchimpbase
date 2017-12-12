var BaseMailchimpService = require("./BaseMailchimpService")
var request = require("request");

module.exports.get_all_campaigns = function (callback) {
    BaseMailchimpService.get_auth_header_value(function (maildata) {
        auth = maildata.auth;
        var options = {
            method: 'GET',
            url: maildata.api_url + 'campaigns',
            headers:
                {
                    'content-type': 'application/json',
                    authorization: auth
                },
            json: true
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            callback(body)
        });
    });
}

module.exports.create_Campaign = function (Campaign, callback) {
    BaseMailchimpService.get_auth_header_value(function (maildata) {
        auth = maildata.auth;
        var options = {
            method: 'POST',
            url: maildata.api_url + 'campaigns',
            headers:
                {
                    'content-type': 'application/json',
                    authorization: auth
                },
            body: Campaign,
            json: true
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            callback(body)
        });
    });
}


module.exports.send_Campaign = function (Campaign_id, callback) {
    console.log("---------------",Campaign_id);
    BaseMailchimpService.get_auth_header_value(function (maildata) {
        console.log("-----------in side----",Campaign_id);
        auth = maildata.auth;
        var options = {
            method: 'POST',
            url: maildata.api_url + 'campaigns/'+Campaign_id+'/actions/send',
            headers:
                {
                    'content-type': 'application/json',
                    authorization: auth
                },
            json: true
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            
        console.log("-----------body----",body);
            callback(body)
        });
    });
}