var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/Member_SQL.properties');
var request = require("request");
module.exports.create_Member = function(Member,callback) {
  /*var create_query = sqlQuery._properties.create_Member;
  sequelize.query(create_query, {
    replacements: {
    	email : Member.email,
    	status : Member.status,
    	created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.Member
  }).then(function(member) {
		callback(member);
	});*/



var options = { method: 'POST',
  url: 'https://us17.api.mailchimp.com/3.0/lists/85edba3b58/members',
  headers: 
   { 'postman-token': 'b0626f27-9a59-a6b8-a11f-f700611a1cb8',
     'cache-control': 'no-cache',
     'content-type': 'application/json',
     authorization: 'Basic ZGhpbmE6ZGMwMzdkMjRmODMyOGZjOWQyNmRmMDc2NTIxY2ExNjItdXMxNw==',
     'x-api-key': 'dc037d24f8328fc9d26df076521ca162' },
  body: 
   { email_address: Member.email_address,
     status: Member.status 
   },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

}
module.exports.update_Member = function(Member,callback) {
  var update_query = sqlQuery._properties.update_Member;
  sequelize.query(update_query, {
    replacements: {
    	id : Member.id,
    	email : Member.email,
    	status : Member.status,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.BULKUPDATE,
    model: models.Member
  }).then(function(member) {
		callback(member);
	});
}
module.exports.search_Member_for_update = function(Member_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_Member;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: Member_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.Member
  }).then(function(member) {
		callback(member[0]);
	});
}
module.exports.delete_Member = function(Member_id,callback) {
  var delete_query = sqlQuery._properties.delete_Member;
  sequelize.query(delete_query, {
    replacements: {
    	id: Member_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.Member
  }).then(function() {
		callback();
	});
}
module.exports.get_all_Member = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_Member;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.Member
  }).then(function(member) {
		callback(member);
	});
}