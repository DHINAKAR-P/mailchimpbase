var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/ListContact_SQL.properties');
module.exports.create_ListContact = function(ListContact,callback) {
  var create_query = sqlQuery._properties.create_ListContact;
  sequelize.query(create_query, {
    replacements: {
    	company : ListContact.company,
    	address1 : ListContact.address1,
    	address2 : ListContact.address2,
    	city : ListContact.city,
    	state : ListContact.state,
    	zip : ListContact.zip,
    	country : ListContact.country,
    	created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.ListContact
  }).then(function(listcontact) {
		callback(listcontact);
	});
}
module.exports.update_ListContact = function(ListContact,callback) {
  var update_query = sqlQuery._properties.update_ListContact;
  sequelize.query(update_query, {
    replacements: {
    	id : ListContact.id,
    	company : ListContact.company,
    	address1 : ListContact.address1,
    	address2 : ListContact.address2,
    	city : ListContact.city,
    	state : ListContact.state,
    	zip : ListContact.zip,
    	country : ListContact.country,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.BULKUPDATE,
    model: models.ListContact
  }).then(function(listcontact) {
		callback(listcontact);
	});
}
module.exports.search_ListContact_for_update = function(ListContact_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_ListContact;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: ListContact_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.ListContact
  }).then(function(listcontact) {
		callback(listcontact[0]);
	});
}
module.exports.delete_ListContact = function(ListContact_id,callback) {
  var delete_query = sqlQuery._properties.delete_ListContact;
  sequelize.query(delete_query, {
    replacements: {
    	id: ListContact_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.ListContact
  }).then(function() {
		callback();
	});
}
module.exports.get_all_ListContact = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_ListContact;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.ListContact
  }).then(function(listcontact) {
		callback(listcontact);
	});
}