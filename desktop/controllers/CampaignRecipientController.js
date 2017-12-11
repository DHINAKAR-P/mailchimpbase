var service = require("../services/CampaignRecipientService")
module.exports.create_CampaignRecipient = function(req, res) {
  var CampaignRecipient = req.body;
  service.create_CampaignRecipient(CampaignRecipient,function (campaignrecipient){
    res.status(201);
    res.json(campaignrecipient);
  });
}
module.exports.update_CampaignRecipient = function(req, res) {
  var CampaignRecipient = req.body;
  service.update_CampaignRecipient(CampaignRecipient,function (campaignrecipient){
    res.status(201);
    res.json(campaignrecipient);

  });
}
module.exports.search_CampaignRecipient_for_update = function(req, res) {
  var CampaignRecipient_id = parseInt(req.params[0], 10);
  service.search_CampaignRecipient_for_update(CampaignRecipient_id,function (campaignrecipient){
    res.json(campaignrecipient);
  });
}
module.exports.delete_CampaignRecipient = function(req, res) {
  var CampaignRecipient_id = parseInt(req.params[0], 10);
  service.delete_CampaignRecipient(CampaignRecipient_id,function (){
    res.status(204);
    res.end();
  });
}
module.exports.get_all_CampaignRecipient = function(req, res) {
  var campaignrecipient_id = req.query.id;

  service.get_all_CampaignRecipient(function (campaignrecipient){
    res.json(campaignrecipient);
  });
}