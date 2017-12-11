var express = require("express");
var router = express.Router();
var controller = require("../../controllers/CampaignRecipientController")
router.post("/CampaignRecipient", controller.create_CampaignRecipient);
router.get(/^\/CampaignRecipient\/(\d+)$/, controller.search_CampaignRecipient_for_update);
router.put("/CampaignRecipient", controller.update_CampaignRecipient);
router.delete(/^\/CampaignRecipient\/(\d+)$/, controller.delete_CampaignRecipient);
router.get("/CampaignRecipient", controller.get_all_CampaignRecipient);

module.exports = router;