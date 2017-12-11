var express = require("express");
var router = express.Router();
var controller = require("../../controllers/MemberController")
router.post("/Member", controller.create_Member);
router.get(/^\/Member\/(\d+)$/, controller.search_Member_for_update);
router.put("/Member", controller.update_Member);
router.delete(/^\/Member\/(\d+)$/, controller.delete_Member);
router.get("/Member/list/:id", controller.get_all_list_Member);



router.get("/lists", controller.get_all_Lists); 

module.exports = router;