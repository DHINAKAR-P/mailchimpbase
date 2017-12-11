var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/CampaignSettings_SQL.properties');
module.exports.create_CampaignSettings = function(CampaignSettings,callback) {
  var create_query = sqlQuery._properties.create_CampaignSettings;
  sequelize.query(create_query, {
    replacements: {
    	subject_line : CampaignSettings.subject_line,
    	title : CampaignSettings.title,
    	from_name : CampaignSettings.from_name,
    	reply_to : CampaignSettings.reply_to,
    	template_id : CampaignSettings.template_id,
    	created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.CampaignSettings
  }).then(function(campaignsettings) {
		callback(campaignsettings);
	});
}
module.exports.update_CampaignSettings = function(CampaignSettings,callback) {
  var update_query = sqlQuery._properties.update_CampaignSettings;
  sequelize.query(update_query, {
    replacements: {
    	id : CampaignSettings.id,
    	subject_line : CampaignSettings.subject_line,
    	title : CampaignSettings.title,
    	from_name : CampaignSettings.from_name,
    	reply_to : CampaignSettings.reply_to,
    	template_id : CampaignSettings.template_id,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.BULKUPDATE,
    model: models.CampaignSettings
  }).then(function(campaignsettings) {
		callback(campaignsettings);
	});
}
module.exports.search_CampaignSettings_for_update = function(CampaignSettings_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_CampaignSettings;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: CampaignSettings_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.CampaignSettings
  }).then(function(campaignsettings) {
		callback(campaignsettings[0]);
	});
}
module.exports.delete_CampaignSettings = function(CampaignSettings_id,callback) {
  var delete_query = sqlQuery._properties.delete_CampaignSettings;
  sequelize.query(delete_query, {
    replacements: {
    	id: CampaignSettings_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.CampaignSettings
  }).then(function() {
		callback();
	});
}
module.exports.get_all_CampaignSettings = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_CampaignSettings;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.CampaignSettings
  }).then(function(campaignsettings) {
		callback(campaignsettings);
	});
}