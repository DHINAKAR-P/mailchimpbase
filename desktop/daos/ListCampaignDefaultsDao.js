var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/ListCampaignDefaults_SQL.properties');
module.exports.create_ListCampaignDefaults = function(ListCampaignDefaults,callback) {
  var create_query = sqlQuery._properties.create_ListCampaignDefaults;
  sequelize.query(create_query, {
    replacements: {
    	from_name : ListCampaignDefaults.from_name,
    	from_email : ListCampaignDefaults.from_email,
    	subject : ListCampaignDefaults.subject,
    	language : ListCampaignDefaults.language,
    	created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.ListCampaignDefaults
  }).then(function(listcampaigndefaults) {
		callback(listcampaigndefaults);
	});
}
module.exports.update_ListCampaignDefaults = function(ListCampaignDefaults,callback) {
  var update_query = sqlQuery._properties.update_ListCampaignDefaults;
  sequelize.query(update_query, {
    replacements: {
    	id : ListCampaignDefaults.id,
    	from_name : ListCampaignDefaults.from_name,
    	from_email : ListCampaignDefaults.from_email,
    	subject : ListCampaignDefaults.subject,
    	language : ListCampaignDefaults.language,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.BULKUPDATE,
    model: models.ListCampaignDefaults
  }).then(function(listcampaigndefaults) {
		callback(listcampaigndefaults);
	});
}
module.exports.search_ListCampaignDefaults_for_update = function(ListCampaignDefaults_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_ListCampaignDefaults;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: ListCampaignDefaults_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.ListCampaignDefaults
  }).then(function(listcampaigndefaults) {
		callback(listcampaigndefaults[0]);
	});
}
module.exports.delete_ListCampaignDefaults = function(ListCampaignDefaults_id,callback) {
  var delete_query = sqlQuery._properties.delete_ListCampaignDefaults;
  sequelize.query(delete_query, {
    replacements: {
    	id: ListCampaignDefaults_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.ListCampaignDefaults
  }).then(function() {
		callback();
	});
}
module.exports.get_all_ListCampaignDefaults = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_ListCampaignDefaults;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.ListCampaignDefaults
  }).then(function(listcampaigndefaults) {
		callback(listcampaigndefaults);
	});
}