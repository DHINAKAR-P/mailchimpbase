var dao = require("../daos/MemberDao")
var BaseMailchimpService = require("./BaseMailchimpService")
var request = require("request");

module.exports.create_Member = function(Member,callback) {
  dao.create_Member(Member,function (member){
    callback(member);
  });
}
module.exports.update_Member = function(Member,callback) {
  dao.update_Member(Member,function (member){
    callback(member);
  });
}
module.exports.search_Member_for_update = function(Member_id,callback) {
  dao.search_Member_for_update(Member_id,function (member){
    callback(member)
  });
}
module.exports.delete_Member = function(Member_id,callback) {
  dao.delete_Member(Member_id,function (){
    callback();
  });
}



module.exports.get_all_list_Member = function(list_id,callback) {
  var list_id=list_id;
  console.log("list_id- > ",list_id)
BaseMailchimpService.get_auth_header_value(function(maildata){
  console.log("mail data- >>>>" , list_id)
  auth  = maildata.auth; 
  var options = { method: 'GET',
  url: maildata.api_url+'lists/'+list_id+'/members',
  headers: 
   {   
     'content-type': 'application/json',
     authorization: auth },  
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
callback(body)
  
});

});
}

module.exports.get_all_Lists = function(callback) {
BaseMailchimpService.get_auth_header_value(function(maildata){
  console.log("mail data- >>>>" , maildata)
  auth  = maildata.auth; 
  var options = { method: 'GET',
  url: maildata.api_url+'lists/',
  headers: 
   {   
     'content-type': 'application/json',
     authorization: auth },  
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
callback(body)
  
});

});
}