var service = require("../services/ListContactService")
module.exports.create_ListContact = function(req, res) {
  var ListContact = req.body;
  service.create_ListContact(ListContact,function (listcontact){
    res.status(201);
    res.json(listcontact);
  });
}
module.exports.update_ListContact = function(req, res) {
  var ListContact = req.body;
  service.update_ListContact(ListContact,function (listcontact){
    res.status(201);
    res.json(listcontact);

  });
}
module.exports.search_ListContact_for_update = function(req, res) {
  var ListContact_id = parseInt(req.params[0], 10);
  service.search_ListContact_for_update(ListContact_id,function (listcontact){
    res.json(listcontact);
  });
}
module.exports.delete_ListContact = function(req, res) {
  var ListContact_id = parseInt(req.params[0], 10);
  service.delete_ListContact(ListContact_id,function (){
    res.status(204);
    res.end();
  });
}
module.exports.get_all_ListContact = function(req, res) {
  var listcontact_id = req.query.id;

  service.get_all_ListContact(function (listcontact){
    res.json(listcontact);
  });
}