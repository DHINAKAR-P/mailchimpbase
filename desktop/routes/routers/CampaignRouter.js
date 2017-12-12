var express = require("express");
var router = express.Router();
var controller = require("../../controllers/CampaignController")
router.post("/Campaign", controller.create_Campaign);
router.get("/Campaign", controller.get_all_campaigns);
router.post("/Campaign/send",controller.send_Campaign);

module.exports = router;