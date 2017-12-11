var express = require("express");
var router = express.Router();
var controller = require("../../controllers/CampaignSettingsController")
router.post("/CampaignSettings", controller.create_CampaignSettings);
router.get(/^\/CampaignSettings\/(\d+)$/, controller.search_CampaignSettings_for_update);
router.put("/CampaignSettings", controller.update_CampaignSettings);
router.delete(/^\/CampaignSettings\/(\d+)$/, controller.delete_CampaignSettings);
router.get("/CampaignSettings", controller.get_all_CampaignSettings);

module.exports = router;