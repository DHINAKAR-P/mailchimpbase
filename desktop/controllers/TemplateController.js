var service = require("../services/TemplateService")
var mail_config = require("../config/mail_config")

module.exports.create_Template = function(req, res) {
  var Template = req.body;
  service.create_Template(Template,function (template){
    res.status(201);
    res.json(template);
  });
}
module.exports.update_Template = function(req, res) {
  var Template = req.body;
  service.update_Template(Template,function (template){
    res.status(201);
    res.json(template);

  });
}
module.exports.search_Template_for_update = function(req, res) {
  var Template_id = parseInt(req.params[0], 10);
  service.search_Template_for_update(Template_id,function (template){
    res.json(template);
  });
}
module.exports.delete_Template = function(req, res) {
  var Template_id = parseInt(req.params[0], 10);
  service.delete_Template(Template_id,function (){
    res.status(204);
    res.end();
  });
}
module.exports.get_all_Template = function(req, res) {

  service.get_all_Template(function (template){
    
    res.json(template);
  });
}