var express = require("express");
var router = express.Router();
var controller = require("../../controllers/ListCampaignDefaultsController")
router.post("/ListCampaignDefaults", controller.create_ListCampaignDefaults);
router.get(/^\/ListCampaignDefaults\/(\d+)$/, controller.search_ListCampaignDefaults_for_update);
router.put("/ListCampaignDefaults", controller.update_ListCampaignDefaults);
router.delete(/^\/ListCampaignDefaults\/(\d+)$/, controller.delete_ListCampaignDefaults);
router.get("/ListCampaignDefaults", controller.get_all_ListCampaignDefaults);

module.exports = router;