'use strict';

module.exports = function(sequelize, DataTypes) {
  var CampaignSettings = sequelize.define("CampaignSettings", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    updated_date:DataTypes.DATE,
    subject_line: DataTypes.STRING,
    title: DataTypes.STRING,
    from_name: DataTypes.STRING,
    reply_to: DataTypes.STRING,
    template_id: DataTypes.INTEGER
  },{
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
  });
  return CampaignSettings;
};