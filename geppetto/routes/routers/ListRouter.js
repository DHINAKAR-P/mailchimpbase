var express = require("express");
var router = express.Router();
var controller = require("../../controllers/ListsController");
router.get("/list/:id/members", controller.get_all_list_Member);
router.post("/list/:id/members", controller.add_member_to_list);
router.get("/lists", controller.get_all_Lists); 
router.post("/lists", controller.create_List); 

module.exports = router;