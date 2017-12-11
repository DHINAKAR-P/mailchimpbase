var dao = require("../daos/CampaignRecipientDao")
module.exports.create_CampaignRecipient = function(CampaignRecipient,callback) {
  dao.create_CampaignRecipient(CampaignRecipient,function (campaignrecipient){
    callback(campaignrecipient);
  });
}
module.exports.update_CampaignRecipient = function(CampaignRecipient,callback) {
  dao.update_CampaignRecipient(CampaignRecipient,function (campaignrecipient){
    callback(campaignrecipient);
  });
}
module.exports.search_CampaignRecipient_for_update = function(CampaignRecipient_id,callback) {
  dao.search_CampaignRecipient_for_update(CampaignRecipient_id,function (campaignrecipient){
    callback(campaignrecipient)
  });
}
module.exports.delete_CampaignRecipient = function(CampaignRecipient_id,callback) {
  dao.delete_CampaignRecipient(CampaignRecipient_id,function (){
    callback();
  });
}
module.exports.get_all_CampaignRecipient = function(callback) {
  dao.get_all_CampaignRecipient(function (list_of_campaignrecipient){
    callback(list_of_campaignrecipient)
  });
}