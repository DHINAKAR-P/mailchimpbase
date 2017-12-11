var service = require("../services/MemberService")
module.exports.create_Member = function(req, res) {
  var Member = req.body;
  service.create_Member(Member,function (member){
    res.status(201);
    res.json(member);
  });
}
module.exports.update_Member = function(req, res) {
  var Member = req.body;
  service.update_Member(Member,function (member){
    res.status(201);
    res.json(member);

  });
}
module.exports.search_Member_for_update = function(req, res) {
  var Member_id = parseInt(req.params[0], 10);
  service.search_Member_for_update(Member_id,function (member){
    res.json(member);
  });
}
module.exports.delete_Member = function(req, res) {
  var Member_id = parseInt(req.params[0], 10);
  service.delete_Member(Member_id,function (){
    res.status(204);
    res.end();
  });
}
module.exports.get_all_list_Member = function(req, res) {
  var list_id = req.params.id;

  console.log("list_id- > ",req)

  service.get_all_list_Member(list_id,function (member){
    res.json(member);
  });
}

module.exports.get_all_Lists = function(req, res) {
    service.get_all_Lists(function (member){
    res.json(member);
  });
}