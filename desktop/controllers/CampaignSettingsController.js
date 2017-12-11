var service = require("../services/CampaignSettingsService")
module.exports.create_CampaignSettings = function(req, res) {
  var CampaignSettings = req.body;
  service.create_CampaignSettings(CampaignSettings,function (campaignsettings){
    res.status(201);
    res.json(campaignsettings);
  });
}
module.exports.update_CampaignSettings = function(req, res) {
  var CampaignSettings = req.body;
  service.update_CampaignSettings(CampaignSettings,function (campaignsettings){
    res.status(201);
    res.json(campaignsettings);

  });
}
module.exports.search_CampaignSettings_for_update = function(req, res) {
  var CampaignSettings_id = parseInt(req.params[0], 10);
  service.search_CampaignSettings_for_update(CampaignSettings_id,function (campaignsettings){
    res.json(campaignsettings);
  });
}
module.exports.delete_CampaignSettings = function(req, res) {
  var CampaignSettings_id = parseInt(req.params[0], 10);
  service.delete_CampaignSettings(CampaignSettings_id,function (){
    res.status(204);
    res.end();
  });
}
module.exports.get_all_CampaignSettings = function(req, res) {
  var campaignsettings_id = req.query.id;

  service.get_all_CampaignSettings(function (campaignsettings){
    res.json(campaignsettings);
  });
}