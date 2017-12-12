var service = require("../services/CampaignService")
var mail_config = require("../config/mail_config")

//GET ALl Template
module.exports.get_all_campaigns = function (req, res) {
  service.get_all_campaigns(function (campaign) {
    res.json(campaign);
  });
}

//POST Campaign
module.exports.create_Campaign = function (req, res) {
  var Campaign = req.body;
  service.create_Campaign(Campaign, function (campaign) {
    res.status(201);
    res.json(campaign);
  });
}

///campaigns/{campaign_id}/actions/send
module.exports.send_Campaign = function (req, res) {
  var Campaign = req.body;
  service.send_Campaign(Campaign.campaign_id, function (campaign) {
    res.status(201);
    res.json(campaign);
  });
}