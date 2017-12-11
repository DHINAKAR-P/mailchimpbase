var service = require("../services/ListCampaignDefaultsService")
module.exports.create_ListCampaignDefaults = function(req, res) {
  var ListCampaignDefaults = req.body;
  service.create_ListCampaignDefaults(ListCampaignDefaults,function (listcampaigndefaults){
    res.status(201);
    res.json(listcampaigndefaults);
  });
}
module.exports.update_ListCampaignDefaults = function(req, res) {
  var ListCampaignDefaults = req.body;
  service.update_ListCampaignDefaults(ListCampaignDefaults,function (listcampaigndefaults){
    res.status(201);
    res.json(listcampaigndefaults);

  });
}
module.exports.search_ListCampaignDefaults_for_update = function(req, res) {
  var ListCampaignDefaults_id = parseInt(req.params[0], 10);
  service.search_ListCampaignDefaults_for_update(ListCampaignDefaults_id,function (listcampaigndefaults){
    res.json(listcampaigndefaults);
  });
}
module.exports.delete_ListCampaignDefaults = function(req, res) {
  var ListCampaignDefaults_id = parseInt(req.params[0], 10);
  service.delete_ListCampaignDefaults(ListCampaignDefaults_id,function (){
    res.status(204);
    res.end();
  });
}
module.exports.get_all_ListCampaignDefaults = function(req, res) {
  var listcampaigndefaults_id = req.query.id;

  service.get_all_ListCampaignDefaults(function (listcampaigndefaults){
    res.json(listcampaigndefaults);
  });
}