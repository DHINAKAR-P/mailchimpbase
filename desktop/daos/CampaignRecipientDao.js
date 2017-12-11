var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/CampaignRecipient_SQL.properties');
module.exports.create_CampaignRecipient = function(CampaignRecipient,callback) {
  var create_query = sqlQuery._properties.create_CampaignRecipient;
  sequelize.query(create_query, {
    replacements: {
    	list_id : CampaignRecipient.list_id,
    	created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.CampaignRecipient
  }).then(function(campaignrecipient) {
		callback(campaignrecipient);
	});
}
module.exports.update_CampaignRecipient = function(CampaignRecipient,callback) {
  var update_query = sqlQuery._properties.update_CampaignRecipient;
  sequelize.query(update_query, {
    replacements: {
    	id : CampaignRecipient.id,
    	list_id : CampaignRecipient.list_id,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.BULKUPDATE,
    model: models.CampaignRecipient
  }).then(function(campaignrecipient) {
		callback(campaignrecipient);
	});
}
module.exports.search_CampaignRecipient_for_update = function(CampaignRecipient_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_CampaignRecipient;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: CampaignRecipient_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.CampaignRecipient
  }).then(function(campaignrecipient) {
		callback(campaignrecipient[0]);
	});
}
module.exports.delete_CampaignRecipient = function(CampaignRecipient_id,callback) {
  var delete_query = sqlQuery._properties.delete_CampaignRecipient;
  sequelize.query(delete_query, {
    replacements: {
    	id: CampaignRecipient_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.CampaignRecipient
  }).then(function() {
		callback();
	});
}
module.exports.get_all_CampaignRecipient = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_CampaignRecipient;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.CampaignRecipient
  }).then(function(campaignrecipient) {
		callback(campaignrecipient);
	});
}