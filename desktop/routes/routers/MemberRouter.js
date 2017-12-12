var express = require("express");
var router = express.Router();
var controller = require("../../controllers/MemberController")
// router.post("/Member", controller.create_Member);
// router.get(/^\/Member\/(\d+)$/, controller.search_Member_for_update);
// router.put("/Member", controller.update_Member);
// router.delete(/^\/Member\/(\d+)$/, controller.delete_Member);
// router.get("/Member/list/:id", controller.get_all_list_Member);


router.get("/list/:id/members", controller.get_all_list_Member);
router.post("/list/:id/members", controller.add_member_to_list);
router.get("/lists", controller.get_all_Lists); 
router.post("/lists", controller.create_List); 

module.exports = router;