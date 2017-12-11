var dao = require("../daos/TemplateDao")
module.exports.create_Template = function(Template,callback) {
  dao.create_Template(Template,function (template){
    callback(template);
  });
}
module.exports.update_Template = function(Template,callback) {
  dao.update_Template(Template,function (template){
    callback(template);
  });
}
module.exports.search_Template_for_update = function(Template_id,callback) {
  dao.search_Template_for_update(Template_id,function (template){
    callback(template)
  });
}
module.exports.delete_Template = function(Template_id,callback) {
  dao.delete_Template(Template_id,function (){
    callback();
  });
}
module.exports.get_all_Template = function(callback) {
  dao.get_all_Template(function (list_of_template){
    callback(list_of_template)
  });
}