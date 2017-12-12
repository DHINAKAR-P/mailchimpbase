var express = require("express");
var api = express.Router();
var routers = require("./routers")
api.use("/mailchimp/Templates", routers.TemplateRouter);
api.use("/mailchimp", routers.MemberRouter);

/*
api.use("/ListContact", routers.ListContactRouter);
api.use("/ListCampaignDefaults", routers.ListCampaignDefaultsRouter);
api.use("/CampaignSettings", routers.CampaignSettingsRouter);
api.use("/CampaignRecipient", routers.CampaignRecipientRouter);*/

module.exports = api;