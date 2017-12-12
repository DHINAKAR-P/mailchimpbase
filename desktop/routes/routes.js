var express = require("express");
var api = express.Router();
var routers = require("./routers")
api.use("/mailchimp/Templates", routers.TemplateRouter);
api.use("/mailchimp/Campaigns", routers.CampaignRouter);
api.use("/mailchimp", routers.ListRouter);
module.exports = api;