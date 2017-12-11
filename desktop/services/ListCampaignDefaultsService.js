var dao = require("../daos/ListCampaignDefaultsDao")
module.exports.create_ListCampaignDefaults = function(ListCampaignDefaults,callback) {
  dao.create_ListCampaignDefaults(ListCampaignDefaults,function (listcampaigndefaults){
    callback(listcampaigndefaults);
  });
}
module.exports.update_ListCampaignDefaults = function(ListCampaignDefaults,callback) {
  dao.update_ListCampaignDefaults(ListCampaignDefaults,function (listcampaigndefaults){
    callback(listcampaigndefaults);
  });
}
module.exports.search_ListCampaignDefaults_for_update = function(ListCampaignDefaults_id,callback) {
  dao.search_ListCampaignDefaults_for_update(ListCampaignDefaults_id,function (listcampaigndefaults){
    callback(listcampaigndefaults)
  });
}
module.exports.delete_ListCampaignDefaults = function(ListCampaignDefaults_id,callback) {
  dao.delete_ListCampaignDefaults(ListCampaignDefaults_id,function (){
    callback();
  });
}
module.exports.get_all_ListCampaignDefaults = function(callback) {
  dao.get_all_ListCampaignDefaults(function (list_of_listcampaigndefaults){
    callback(list_of_listcampaigndefaults)
  });
}