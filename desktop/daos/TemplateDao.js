var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/Template_SQL.properties');
module.exports.create_Template = function(Template,callback) {
  var create_query = sqlQuery._properties.create_Template;
  sequelize.query(create_query, {
    replacements: {
    	name : Template.name,
    	html : Template.html,
    	created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.Template
  }).then(function(template) {
		callback(template);
	});
}
module.exports.update_Template = function(Template,callback) {
  var update_query = sqlQuery._properties.update_Template;
  sequelize.query(update_query, {
    replacements: {
    	id : Template.id,
    	name : Template.name,
    	html : Template.html,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.BULKUPDATE,
    model: models.Template
  }).then(function(template) {
		callback(template);
	});
}
module.exports.search_Template_for_update = function(Template_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_Template;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: Template_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.Template
  }).then(function(template) {
		callback(template[0]);
	});
}
module.exports.delete_Template = function(Template_id,callback) {
  var delete_query = sqlQuery._properties.delete_Template;
  sequelize.query(delete_query, {
    replacements: {
    	id: Template_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.Template
  }).then(function() {
		callback();
	});
}
module.exports.get_all_Template = function(callback) {
  /*var get_all_query = sqlQuery._properties.get_all_Template;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.Template
  }).then(function(template) {
		callback(template);
	});*/

  
}