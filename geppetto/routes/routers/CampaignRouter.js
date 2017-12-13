var express = require("express");
var router = express.Router();
var controller = require("../../controllers/CampaignController")
router.post("/Campaign", controller.create_Campaign);
router.get("/Campaign", controller.get_all_campaigns);

router.get("/Campaign/:id", controller.get_campaign_By_Id);
router.get("/Campaign/:id/content", controller.get_campaign_content);
router.post("/Campaign/send",controller.send_Campaign);

module.exports = router;