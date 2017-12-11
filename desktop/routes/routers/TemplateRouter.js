var express = require("express");
var router = express.Router();
var controller = require("../../controllers/TemplateController")
router.post("/Template", controller.create_Template);
router.get(/^\/Template\/(\d+)$/, controller.search_Template_for_update);
router.put("/Template", controller.update_Template);
router.delete(/^\/Template\/(\d+)$/, controller.delete_Template);
router.get("/Template", controller.get_all_Template);

module.exports = router;