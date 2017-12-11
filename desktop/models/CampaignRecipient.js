'use strict';

module.exports = function(sequelize, DataTypes) {
  var CampaignRecipient = sequelize.define("CampaignRecipient", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    updated_date:DataTypes.DATE,
    list_id: DataTypes.STRING
  },{
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
  });
  return CampaignRecipient;
};