
   'use_strict';
    var requestify = require('requestify');

    exports.getRequest = function(url,options){
      if(url){
          requestify.get(url,options).then(function(err,response){
              if(err){
                  return err;
              }else {
                  console.log(response.getBody());
                  return response.getBody();
              }
          })
      }
   };
