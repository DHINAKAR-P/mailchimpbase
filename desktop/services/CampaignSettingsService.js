var dao = require("../daos/CampaignSettingsDao")
module.exports.create_CampaignSettings = function(CampaignSettings,callback) {
  dao.create_CampaignSettings(CampaignSettings,function (campaignsettings){
    callback(campaignsettings);
  });
}
module.exports.update_CampaignSettings = function(CampaignSettings,callback) {
  dao.update_CampaignSettings(CampaignSettings,function (campaignsettings){
    callback(campaignsettings);
  });
}
module.exports.search_CampaignSettings_for_update = function(CampaignSettings_id,callback) {
  dao.search_CampaignSettings_for_update(CampaignSettings_id,function (campaignsettings){
    callback(campaignsettings)
  });
}
module.exports.delete_CampaignSettings = function(CampaignSettings_id,callback) {
  dao.delete_CampaignSettings(CampaignSettings_id,function (){
    callback();
  });
}
module.exports.get_all_CampaignSettings = function(callback) {
  dao.get_all_CampaignSettings(function (list_of_campaignsettings){
    callback(list_of_campaignsettings)
  });
}