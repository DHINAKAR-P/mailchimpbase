var express = require("express");
var router = express.Router();
var controller = require("../../controllers/ListContactController")
router.post("/ListContact", controller.create_ListContact);
router.get(/^\/ListContact\/(\d+)$/, controller.search_ListContact_for_update);
router.put("/ListContact", controller.update_ListContact);
router.delete(/^\/ListContact\/(\d+)$/, controller.delete_ListContact);
router.get("/ListContact", controller.get_all_ListContact);

module.exports = router;