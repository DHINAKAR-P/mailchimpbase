'use strict';
//var CampaignRecipient = require('./CampaignRecipient.js')

module.exports = function(sequelize, DataTypes) {
  var Campaign = sequelize.define("Campaign", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    updated_date:DataTypes.DATE,
    type: DataTypes.STRING
   // CampaignRecipient.belongsTo():{ type: Schema.Types.ObjectId, ref: 'CampaignRecipient'},
    //CampaignSettings:{ type: Schema.Types.ObjectId, ref: 'CampaignSettings'}    
  },{
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
  });
 
  return Campaign;

   CampaignRecipient.belongsTo(Campaign);
    CampaignSettings.belongsTo(Campaign);
};