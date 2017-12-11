var dao = require("../daos/ListContactDao")
module.exports.create_ListContact = function(ListContact,callback) {
  dao.create_ListContact(ListContact,function (listcontact){
    callback(listcontact);
  });
}
module.exports.update_ListContact = function(ListContact,callback) {
  dao.update_ListContact(ListContact,function (listcontact){
    callback(listcontact);
  });
}
module.exports.search_ListContact_for_update = function(ListContact_id,callback) {
  dao.search_ListContact_for_update(ListContact_id,function (listcontact){
    callback(listcontact)
  });
}
module.exports.delete_ListContact = function(ListContact_id,callback) {
  dao.delete_ListContact(ListContact_id,function (){
    callback();
  });
}
module.exports.get_all_ListContact = function(callback) {
  dao.get_all_ListContact(function (list_of_listcontact){
    callback(list_of_listcontact)
  });
}