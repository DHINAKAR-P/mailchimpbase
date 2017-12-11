'use strict';

module.exports = function(sequelize, DataTypes) {
  var ListCampaignDefaults = sequelize.define("ListCampaignDefaults", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    updated_date:DataTypes.DATE,
    from_name: DataTypes.STRING,
    from_email: DataTypes.STRING,
    subject: DataTypes.STRING,
    language: DataTypes.STRING
  },{
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
  });
  return ListCampaignDefaults;
};